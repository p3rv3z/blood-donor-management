<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class User extends Authenticatable
{
	use HasFactory, Notifiable, HasApiTokens;

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->ubd_id = IdGenerator::generate(['table' => 'users', 'field' => 'ubd_id', 'length' => 8, 'prefix' => "UBD"]);
		});
	}

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'father_name',
		'date_of_birth',

		'blood_group_id',
		'donated',
		'received',
		'donated_at',

		'location_id',
		'address',
		'facebook_id',

		'phone',
		'email',
		'password',

		'recorded_by',
		'approved_at',

	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	protected $dates = ['approved_at'];

	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
		'donated_at' => 'datetime',
		'approved_at' => 'datetime'
	];

	public function bloodGroup()
	{
		return $this->belongsTo(BloodGroup::class);
	}

	public function location()
	{
		return $this->belongsTo(Location::class);
	}
}
