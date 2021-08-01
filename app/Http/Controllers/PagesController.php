<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        $boy = "This is a boy";
        return view('app', ['boy' => $boy]);
    }
}
