<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/',array('uses' => 'CategoriesController@index'));

Route::resource('categories', 'CategoriesController');
Route::resource('colleges', 'CollegesController');
Route::resource('pages', 'PagesController');
Route::resource('contacts', 'ContactsController');
Route::resource('institutes', 'InstitutesController');
Route::resource('institute_options', 'InstituteOptionsController');
Route::resource('users', 'UsersController');
