<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Menu extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'menu_id';

    protected $fillable = [
        'restaurant_id',
        'name',
        'description',
        'image_path',
        'price',
        'category',
    ];

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }
}
