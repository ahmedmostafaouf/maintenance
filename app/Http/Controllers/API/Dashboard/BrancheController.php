<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\BranchesRequest;
use App\Http\Resources\Dashboard\BranchesResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Branch;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BrancheController extends Controller
{
    use ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $branches = Branch::branchesData($request);
        return BranchesResource::collection($branches);
    }

    public function getAllOrganizations(){
        $organizations = Organization::all();
        return response()->json(['status'=>true,'data'=>$organizations]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BranchesRequest $request)
    {
        try{
          //  dd($request->all());
            Branch::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->desc,
                'organization_id' => $request->org,
            ]);
            return $this->returnSuccessMessage('Branch Stored Succeffully');

         } catch (ValidationException $e) {
            return $this->validationError($e,'validation err');

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
