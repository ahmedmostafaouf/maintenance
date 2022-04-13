<?php

use Illuminate\Support\Facades\File;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

if(!function_exists('generateQrcode')){
    function generateQrcode($organizationName){
        $qrcode = $organizationName.'_'.time().'_qrcode'.'.svg';
        $path = public_path('images/organization/qrcode');
        if(!File::isDirectory($path)){
            File::makeDirectory($path, 0777, true, true);
        }
        QrCode::size(500)
            ->backgroundColor(255,255,204)
            ->format('svg')
            ->generate($organizationName,$path.'/'.$qrcode);

        return $qrcode;
    }
}


if(!function_exists('imageUpload')){
    function imageUpload($image, $path){
        $imageName = 'image_'.time().'.'.$image->extension();
        if(!File::isDirectory($path)){
            File::makeDirectory($path, 0777, true, true);
        }
        $image->move(public_path($path), $imageName);
        return $imageName;
    }
}

if(!function_exists('permissions')){
    function permissions(){
       $permissions = ['branches','departments','members','organizations','roles','services','users'];
        return $permissions;
    }
}
