<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="https://unpkg.com/cube-ui/lib/cube.min.css">
        <link href="{{ asset('mobile/css/app.css') }}" rel="stylesheet">
        <script src="https://unpkg.com/lib-flexible@0.3.2/flexible.js"></script>
    </head>
    <body>
      <div id="app">
          <app></app>
      </div>
    </body>
</html>
