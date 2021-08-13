<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->string('father_name')->nullable();
            $table->timestamp('birthday')->nullable();
            $table->tinyText('phone')->unique();
            $table->tinyText('facebook_id')->unique()->nullable();
            $table->string('address')->nullable();
            $table->foreignId('location_id')->constrained('locations');

            $table->foreignId('blood_group_id')->constrained('blood_groups');
            $table->tinyInteger('donated')->default(0);
            $table->tinyInteger('received')->default(9);
            $table->timestamp('donated_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
