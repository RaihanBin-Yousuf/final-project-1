<?php

namespace App\Http\Controllers;

use App\Models\ManagePost;
use Illuminate\Http\Request;

class ManagePostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data=Auth::user()->role;
        return view('backend.manage_posts.index');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.manage_posts.create');
    }
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function show(ManagePost $managePost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function edit(ManagePost $managePost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ManagePost $managePost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function destroy(ManagePost $managePost)
    {
        //
    }
}