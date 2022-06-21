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
        Schema::create('maintenance_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('maintenance_id');
            $table->foreign('maintenance_id')->references('id')->on('maintenances')->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('service_id');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('department_id');
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade')->onUpdate('cascade');
            $table->text('location');
            $table->text('desc');
            $table->text('comment')->nullable();
            $table->text('status')->default(0);
            $table->text('image')->nullable();
            $table->tinyInteger('type')->comment('1->devices, 2->cars, 3->nothing');

            $table->unsignedBigInteger('device_id')->nullable();
            $table->foreign('device_id')->references('id')->on('devices')->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('car_id')->nullable();
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('maintenance_orders');
    }
};
