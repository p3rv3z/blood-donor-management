<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $dates = ['donated_at'];

    public function doner()
    {
      return $this->belongsTo(User::class, 'doner_id');
    }

    public function receiver()
    {
      return $this->belongsTo(User::class, 'receiver_id');
    }

    public function recordedBy()
    {
      return $this->hasOne(User::class, 'recorded_by');
    }
}
