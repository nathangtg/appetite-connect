<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderedItems extends Model
{
    use HasFactory;

    protected $table = 'order_items'; // Specify the custom table name

    protected $fillable = [
        'order_id',
        'menu_id',
        'quantity',
        'total',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

}
