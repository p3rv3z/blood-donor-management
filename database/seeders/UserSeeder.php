<?php

namespace Database\Seeders;

use App\Models\BloodGroup;
use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    User::create([
      'ubd_id' => 'ubd00001',
      'name' => "Jhon Doe",
      'father_name' => "Jonathan Doe",
      'date_of_birth' => now(),

      'blood_group_id' => BloodGroup::inRandomOrder()->first()->id,
      'donated' => random_int(1, 10),
      'received' => random_int(1, 10),
      'donated_at' => now(),

      'location_id' => Location::inRandomOrder()->first()->id,
      'address' => 'Urkirchar',
      'facebook_id' => 'fb001',

      'phone' => '01832322223',
      'email' => 'jhon@example.com',
      'password' => Hash::make('password'),

      'approved_at' => now(),
    ]);

    User::factory()->count(19)
      ->create();
  }
}
