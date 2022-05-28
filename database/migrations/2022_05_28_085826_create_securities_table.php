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
        Schema::create('securities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('department_id');
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->tinyInteger('status')->default(0)->comment('0->pending, 1->active');
            $table->string('company_name');
            $table->text('work_reason')->nullable();
            $table->string('responsible');
            $table->string('working_duration');
            $table->string('month');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('visitor_name');
            $table->bigInteger('national_id');
            $table->string('residence');
            $table->string('nationality');
            $table->tinyInteger('involve_chemicals')->default(0)->comment('0->no, 1->yes');
            $table->tinyInteger('work_noisy')->default(0)->comment('0->no, 1->yes');
            $table->tinyInteger('include_elevations')->default(0)->comment('0->no, 1->yes');
            $table->tinyInteger('confined_spaces')->default(0)->comment('0->no, 1->yes');
            $table->tinyInteger('services_separation')->default(0)->comment('0->no, 1->yes');
            $table->tinyInteger('flammable_materials')->default(0)->comment('0->no, 1->yes');
            $table->json('entry_gate')->nullable();
            $table->string('guard_name')->nullable();
            $table->time('entry_time')->nullable();
            $table->string('business_responsible')->nullable();
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
        Schema::dropIfExists('securities');
    }
};
