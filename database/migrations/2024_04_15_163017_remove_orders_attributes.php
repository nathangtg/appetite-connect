<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        $foreignKeys = collect(DB::select("SHOW CREATE TABLE orders"))->first();
        $pattern = '/CONSTRAINT `([^`]*)` FOREIGN KEY \(`menu_id`\)/';
        preg_match($pattern, $foreignKeys->{'Create Table'}, $matches);
        $foreignKeyName = $matches[1] ?? null;

        if ($foreignKeyName) {
            Schema::table('orders', function (Blueprint $table) use ($foreignKeyName) {
                $table->dropForeign($foreignKeyName);
            });
        }

        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn(['name', 'quantity', 'menu_id', ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        // If you want to reverse the changes, you can re-add the dropped columns in the 'down' method
    }
};
