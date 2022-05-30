<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\SecurityRequest;
use App\Http\Resources\Dashboard\SecurityResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Security;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SecurityController extends Controller
{
    use ResponseTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'read securities')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $maintenance = Security::filter($request);
        return SecurityResource::collection($maintenance);
    }

    /**s tore
     * @param SecurityRequest $request
     * @return JsonResponse|void
     */
    public function store(SecurityRequest $request)
    {
        if (auth('sanctum')->user()->cannot('admin', 'write securities')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }

        if (auth('sanctum')->user()->cannot('admin', 'write securities')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        Security::create(self::handleFormData($request));
        $this->returnSuccessMessage('تم انشاء الخدمة بنجاح');
    }

    /**handleFormData
     * @param $request
     * @return array
     */
    private function handleFormData($request) :array
    {

        $status = ( auth()->user()->role_id == User::ADMIN_ROLE )? Security::STATUS_CONFIRMED : Security::STATUS_PENDING;
        $data = array_merge($request->except('start_time', 'end_time'), ['status' => $status]);
        $data['start_date'] = date('Y-m-d H:i:s', strtotime("$request->start_date $request->start_time"));
        $data['end_date'] = date('Y-m-d H:i:s', strtotime("$request->end_date $request->end_time"));
        $data['created_by'] = auth()->id();
        return $data;
    }

    /**edit
     * @param $id
     * @return SecurityResource|JsonResponse
     */
    public function edit($id)
    {
        if (auth('sanctum')->user()->cannot('admin', 'update securities')) {
            return  \response()->json(['status'=>false,'message'=>'Access Forbidden'],403);
        }
        $data = Security::find($id);
        return new SecurityResource($data);
    }

    /**update
     * @param $id
     * @param SecurityRequest $request
     */
    public function update($id, SecurityRequest $request)
    {
        $security = Security::find($id);
        $security->update(self::handleFormData($request));
        $this->returnSuccessMessage('تم تعديل الخدمة بنجاح');
    }
    /**bulkDelete
     * @param $ids
     * @return array
     */
    public function bulkDelete($ids)
    {
        Security::whereIn('id',explode(',',$ids))->delete();
        return $this->returnSuccessMessage('تم الحذف بنجاح');
    }
}
