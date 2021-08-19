<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function (Blueprint $table) {
			$table->id();
			$table->string('ubd_id');
			$table->string('name');
			$table->string('father_name')->nullable();
			$table->timestamp('date_of_birth')->nullable();

			$table->foreignId('blood_group_id')->constrained('blood_groups');
			$table->tinyInteger('donated')->default(0);
			$table->tinyInteger('received')->default(0);
			$table->timestamp('donated_at')->nullable();

			$table->foreignId('location_id')->constrained('locations');
			$table->string('address')->nullable();
			$table->tinyText('facebook_id')->unique()->nullable();

			$table->tinyText('phone')->unique();
			$table->string('email')->unique();
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password')->nullable();

			$table->foreignId('recorded_by')->nullable();
			$table->timestamp('approved_at')->nullable();

			$table->rememberToken();
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
		Schema::dropIfExists('users');
	}
}
