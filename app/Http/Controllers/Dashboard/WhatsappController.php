<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Department;
use App\Models\Member;
use App\Models\MemberService;
use App\Models\Message;
use App\Models\Organization;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class WhatsappController extends Controller
{
    private const WHATSAPP_SEND_API = 'https://ifmibot.com/api/send.php';
    protected $contactName;
    protected $contactNumber;
    protected $instance_id;
    protected $token;
    protected $member_id = null;

    /**webHook
     *
     * @param Request $request
     */
    public function webHook(Request $request){
        $organization = Organization::with('branches.departments.services')->where('instance_id', $request->instance_id)->first();
        if($organization->exists()){
            $this->token = $organization->token;
            $this->instance_id = $organization->instance_id;
            if($request->event = 'message'){
                $messages = $request['data']['messages'][0];
                if(!$messages['key']['fromMe']){
                    //Storage::put('ex.txt', json_encode($request->all()));
                    $this->contactNumber = explode('@',$messages['key']['remoteJid'])[0];
                    $this->contactName = $messages['pushName'];
                    $this->member_id = $this->createMember();
                    $conversation = $messages['message']['conversation'];
                    // contains an underscore and is two words
                    if ( preg_match('/^[a-z]+_[0-9]+$/i', $conversation) ) {
                        $splitText = explode('_', $conversation);
                        $reservedId = $splitText[1];
                        $reservedStep = reservationKeyWords($splitText[0]);
                        if($reservedStep){
                            $message = $this->makeReservation($reservedStep, $reservedId);
                        }else{
                            $message = ['in Correct Choice ...'];
                        }
                        $this->sendMessage( 'text', $message);
                    } else {
                        // does not contain two words, or an underscore so send org branches
                        $branchesMessage = '';
                        foreach ($organization->branches as $branch)
                            $branchesMessage .=" {$branch->name}:  BYKL_{$branch->id} , ";
                        $this->sendMessage('text', [$organization->temp_msg, ' Select Organization Branch and send its Code To us .', $branchesMessage ]);
                    }
                }
            }

        }

    }

    /**makeReservation step by step
     *
     * @param $reservedStep
     * @param $reservedId
     * @return array|string[]
     */
    private function makeReservation($reservedStep, $reservedId){
        $messages =[];
        switch ($reservedStep){
            case 'branch':
                $messages = $this->getDepartmentMessages($reservedId);
                break;
            case 'department':
                $messages = $this->getServicesMessages($reservedId);
                break;
            case 'service':
                $messages = $this->addMemberToService($reservedId);
                break;
        }
        return $messages;
    }

    /**get Department Messages
     *
     * @param $reservedId
     * @return string[]
     */
    private function getDepartmentMessages($reservedId){
        $message = '';
        $departments = Department::where(['branch_id' => $reservedId, 'status' =>1])->get();
        if($departments->count() > 0){
            foreach ($departments as $department)
                $message .=" {$department->name}: DXLE_{$department->id} ,";
            $messages = [ ' Select Branch Department and send its Code To us .', $message];
        }else{
            $messages = [ 'Sorry this Branch Doesn\'t have Departments yet kindly choose other Branch.'];
        }
        return  $messages;
    }

    /**getServicesMessages Related to specific department
     *
     * @param $reservedId
     * @return string[]
     */
    private function getServicesMessages($reservedId){
        $message='';
        $services = Service::where(['department_id' => $reservedId, 'status' =>1])->get();
        if( $services->count() > 0 ){
            foreach ($services as $service)
                $message .=" {$service->name}: SPOU_{$service->id} ,";
            $messages = [ ' Select Department Service and send its Code To us .', $message];
        }else{
            $messages = [ 'Sorry this Department Doesn\'t have Services yet kindly choose other Department.'];
        }
        return  $messages;
    }

    /**addMemberToService to finish booking
     * @param $reservedId
     * @return string[]
     */
    private function addMemberToService($reservedId){
        $service = Service::find($reservedId);
        if($service->exists()){
            $messages = ["Booked successfully , Your Window number is {$service->queue_number}"];
            MemberService::create(['member_id' => $this->member_id, 'service_id' => $service->id,]);
        }else{
            $messages = [ 'Sorry Something Wrong happened , try again later.'];
        }
        return $messages;
    }

    /** sendMessage
     * @param $type
     * @param $messages
     */
    private function sendMessage($type, $messages){
        foreach ($messages as $message){
            $response = Http::post(self::WHATSAPP_SEND_API."?number=$this->contactNumber&type=$type&message=$message&instance_id=$this->instance_id&access_token=$this->token");
            if($response->successful()){
                $responseBody = json_decode($response->body());
                if($responseBody->status == 'success'){
                    Message::create([
                        'msg_id' => $responseBody->data->key->id,
                        'member_id' => $this->member_id,
                        'body' => $message,
                        'msg_type' => $type,
                        'from_me' => 1,
                        'msg_date' => Carbon::now(),
                        'contact_number' => $responseBody->data->key->remoteJid,
                    ]);
                }
            }
        }
    }

    /**createMember
     * @return mixed
     */
    private function createMember(){
        $member = Member::updateOrCreate(['name' => $this->contactName],['phone' => $this->contactNumber]);
        return $member->id;
    }

}
