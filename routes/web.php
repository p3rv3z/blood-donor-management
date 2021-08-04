<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function() {
  return "Hello";
});

Route::get(
  '/dashboard/{any?}',
  function () {
    return view('admin.home');
  }
)->where('any', '.*')
  ->name('home');
