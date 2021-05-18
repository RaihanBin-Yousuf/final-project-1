<?php

namespace App\Http\Controllers;

use App\Models\GoogleMap;
use Illuminate\Http\Request;

class GoogleMapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.google.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GoogleMap  $googleMap
     * @return \Illuminate\Http\Response
     */
    public function show(GoogleMap $googleMap)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GoogleMap  $googleMap
     * @return \Illuminate\Http\Response
     */
    public function edit(GoogleMap $googleMap)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GoogleMap  $googleMap
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GoogleMap $googleMap)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GoogleMap  $googleMap
     * @return \Illuminate\Http\Response
     */
    public function destroy(GoogleMap $googleMap)
    {
        //
    }
}