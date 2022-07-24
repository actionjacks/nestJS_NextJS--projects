<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    @vite(['resources/js/app.js'])

</head>
<body>
  <div class="sidebar">     
    <button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>   
    @section('sidebar')
        <ul>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
        </ul>
    @show
  </div>

  <div class="container">
      @yield('content')
  </div>
</body>
</html> 