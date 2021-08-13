<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $dates = ['donated_at'];

    public function bloodGroup()
    {
      return $this->belongsTo(BloodGroup::class);
    }

    public function location()
    {
      return $this->belongsTo(Location::class);
    }
}
