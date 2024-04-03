<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Restaurant extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'restaurant_id';

    protected $fillable = [
        'user_id',
        'name',
        'location',
        'description',
        'image_path',
        'cuisine',
        'preparation_time',
        'price_range',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function menus()
    {
        return $this->hasMany(Menu::class, 'restaurant_id');
    }
}
