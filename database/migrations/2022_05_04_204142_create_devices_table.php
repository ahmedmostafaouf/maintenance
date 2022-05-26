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
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('device_num')->unique();
            $table->string('serial_num')->unique();
            $table->string('category')->nullable();
            $table->string('model')->nullable();
            $table->string('manufacturer_comp')->nullable();
            $table->string('agent')->nullable();
            $table->text('desc')->nullable();
            $table->tinyInteger('status')->default(0)->comment("0=>inactive,1=>active");
            $table->unsignedBigInteger('department_id')->nullable();
            $table->foreign('department_id')->references('id')->on('departments');
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
        Schema::dropIfExists('devices');
    }
};
