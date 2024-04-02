<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid();
            $table->string('name');
            $table->foreignId('user_id')->nullable()->index();
            $table->foreignId('restaurant_id')->nullable()->index();
            $table->foreignId('menu_id')->nullable()->index();
            $table->string('status')->default('pending');
            $table->string('quantity');
            $table->string('total');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('restaurant_id')->references('restaurant_id')->on('restaurants');
            $table->foreign('menu_id')->references('menu_id')->on('menus');
        });

    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
