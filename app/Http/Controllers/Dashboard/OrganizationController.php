<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\OrganizationRequest;
use App\Http\Resources\Dashboard\OrganizationResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    use  ResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         $organizations = Organization::filter($request)
                                     ->orderBy($request->field,$request->type)
                                     ->paginate( $request->per_page );
         return OrganizationResource::collection($organizations);
/*         $this->returnData( 'data', OrganizationResource::collection($organizations), 'Organization Data Returned Successfully' );*/
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  OrganizationRequest  $request
     * @return Response
     */
    public function store(OrganizationRequest $request)
    {
        $data = $request->except('logo');
        if( gettype($request->logo) == 'object' && $request->logo->isValid())
            $data['logo'] = imageUpload($request->logo, 'images/organization/logo');

        $data['qr_code'] = generateQrcode($request->name);
        Organization::create($data);
        $this->returnSuccessMessage('Organization Created Successfully');
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
