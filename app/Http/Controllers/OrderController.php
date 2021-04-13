<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return view('order.index');
    }

    public function store()
    {
        return view('order.create');
    }

    public function edit()
    {
        return view('order.edit');
    }
}
