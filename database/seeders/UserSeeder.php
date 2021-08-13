<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
      'email' => 'jhon@example.com',
      'password' => Hash::make('password'),
      'ubb_id' => 'UBB0001',
    ]);

    User::factory()->count(19)
      ->create()->each(function ($user) {
        $profile = Profile::factory()->make();
        $user->profile()->save($profile);
    });
  }
}
