<?php

namespace Database\Factories;

use App\Models\BloodGroup;
use App\Models\Location;
use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $i = 100;
        return [
          'name' => $this->faker->name(),
          'father_name' => $this->faker->name(),
          'birthday' => $this->faker->date(),
          'phone' => $this->faker->unique()->phoneNumber(),
          'facebook_id' => 'fb' . $i++,
          'address' => $this->faker->address(),
          'location_id' => Location::inRandomOrder()->first()->id,

          'blood_group_id' => BloodGroup::inRandomOrder()->first()->id,
          'donated' => $this->faker->numberBetween(1, 10),
          'received' => $this->faker->numberBetween(1, 10),
          'donated_at'=> $this->faker->date(),
        ];
    }
}
