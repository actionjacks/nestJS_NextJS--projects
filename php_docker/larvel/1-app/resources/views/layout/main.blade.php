<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{$applicationName}}</title>
  <title>
    @yield('title',$applicationName)
  </title>
</head>
<body>
  <div class="sidebar">        
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