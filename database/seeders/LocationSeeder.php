<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Location::insert([
         ['name' => 'Urkirchar'],
         ['name' => 'Modunaghat'],
         ['name' => 'Noapara'],
         ['name' => 'Nozumiahat'],
         ['name' => 'Mohra'],
         ['name' => 'Barighuna'],
         ['name' => 'Akbaria'],
         ['name' => 'Madarsha'],
         ['name' => 'Other'],
        ]);
    }
}
