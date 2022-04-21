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
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name',255);
            $table->bigInteger('phone');
            $table->string('country_code',255);
            $table->text('image')->nullable();
            $table->integer('status')->default(0)->comment('active->1, inactive->0');
            $table->integer('is_online')->default(0)->comment('online->1, offline->0');
            $table->dateTime('last_seen')->nullable();
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
        Schema::dropIfExists('contacts');
    }
};
