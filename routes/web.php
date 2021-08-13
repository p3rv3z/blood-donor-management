<?php

use Illuminate\Support\Facades\Route;


Route::view('/', 'visitor.home');

Route::get(
  '/app/{any?}',
  function () {
    return view('admin.home');
  }
)->where('any', '.*')
  ->name('home');
