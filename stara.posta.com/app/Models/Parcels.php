<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parcels extends Model
{
    use HasFactory;

    protected $fillable = [
        "number",
        "category_id",
        "description",
        "sender_id",
        "receiver_id"
    ];
}
