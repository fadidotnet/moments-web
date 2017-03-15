<?php

namespace App\Http\Controllers;
use App\Categories;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
	public function index()
	{
		$categories = Categories::all();
		return view('pages.home')->with(['categories' => $categories]);
	}
}
