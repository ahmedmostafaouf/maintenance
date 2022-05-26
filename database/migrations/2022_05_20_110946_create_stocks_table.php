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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('status')->comment('1->قطع غيار 2-> المستهلكات 3-> مواد النظافة');
           $table->string('name');
           $table->string('code');
           $table->bigInteger('number');
           $table->tinyInteger('type')->comment('1->عدد 2-> طقم ');
           $table->integer('amount');
           $table->dateTime('supply_date')->nullable();
           $table->string('warehouse_name')->nullable();
           $table->text('note')->nullable();
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
        Schema::dropIfExists('stocks');
    }
};
