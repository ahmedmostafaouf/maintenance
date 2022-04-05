<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('desc')->nullable();
            $table->string('lat')->nullable();
            $table->string('long')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->text('token');
            $table->text('instance_id');
            $table->text('temp_msg');
            $table->string('phone');
            $table->string('logo')->nullable();
            $table->text('qr_code');
            $table->text('website_url')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizations');
    }
};
