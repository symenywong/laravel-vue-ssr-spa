<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link href="{{ asset('admin/css/app.css') }}" rel="stylesheet">
    </head>
    <body>
      <div id="app">
          <app></app>
      </div>
    </body>

 <script type="text/javascript" src="{{ asset('admin/js/app.js') }}"></script> 
</html>
