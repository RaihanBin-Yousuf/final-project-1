@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <div class="p-4">
        <h1>Google Map</h1>
        <div class="managePostCreate" id="react_map_google"></div>
    </div>
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>