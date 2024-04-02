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
        Schema::create('menus', function (Blueprint $table) {
            $table->id("menu_id");
            $table->unsignedBigInteger('restaurant_id');
            $table->string('name');
            $table->string('description');
            $table->string('image_path');
            $table->string('price');
            $table->string('category');
            $table->timestamps();

            // Define foreign key constraint
            $table->foreign('restaurant_id')->references('restaurant_id')->on('restaurants');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');}
};
