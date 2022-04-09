<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\OrganizationRequest;
use App\Http\Resources\Dashboard\OrganizationResource;
use App\Http\Traits\ResponseTrait;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
     * Store a newly created organization in storage.
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
     * Show the form for editing the specified organization.
     *
     * @param  Organization $organization
     * @return Response
     */
    public function edit(Organization $organization)
    {
        return $this->returnData( 'organization', new OrganizationResource($organization), 'Organization Data Returned Successfully' );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  OrganizationRequest  $request
     * @param  Organization $organization
     * @return \Illuminate\Http\Response
     */
    public function update(OrganizationRequest $request, Organization $organization)
    {
        dd($organization);
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
