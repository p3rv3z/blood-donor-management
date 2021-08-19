<?php

namespace Database\Factories;

use App\Models\BloodGroup;
use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = User::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{

    static $j = 101;

		return [
			'name' => $this->faker->name(),
			'father_name' => $this->faker->name(),
			'date_of_birth' => $this->faker->date(),

      'blood_group_id' => BloodGroup::inRandomOrder()->first()->id,
			'donated' => $this->faker->numberBetween(1, 10),
			'received' => $this->faker->numberBetween(1, 10),
			'donated_at' => $this->faker->date(),

			'location_id' => Location::inRandomOrder()->first()->id,
			'address' => $this->faker->address(),
      'facebook_id' => 'fb' . $j++,

			'phone' => $this->faker->unique()->phoneNumber(),
			'email' => $this->faker->unique()->safeEmail(),

			'approved_at' => now(),
		];
	}

	/**
	 * Indicate that the model's email address should be unverified.
	 *
	 * @return \Illuminate\Database\Eloquent\Factories\Factory
	 */
	public function unverified()
	{
		return $this->state(function (array $attributes) {
			return [
				'email_verified_at' => null,
			];
		});
	}
}
