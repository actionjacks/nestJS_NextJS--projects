<div>
  <h1>profile</h1>

  <p>dyrektywy dodatkowe do uzycia</p>

  @auth
      uzytkownik jest zalogowany  return view('user.profile', ['user' => $user]);
  @endauth

  @guest
      uzytkownik nie jest zalogowany
  @endguest

  {{$user['id']}}
    {{$user['firstName']}}
    {{$user['city']}}
    {!! $user['html'] !!}
 
  {{$user['age']}}
  @if ($user['age']>=18)
    <h1>YOOOO</h1>
  @elseif($user['age']==20)
    <h3>Yolloo</h3>
  @else
    <h2>DUPA</h2>
  @endif

  <h1>UZYWANIE PETLI W BLADZIE</h1>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nick</th>
          <th>Opcje</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td calspan="3">PĘtle</td>
{{-- special laravel blade directive what template render, array, variable name for loop, optional fouth argument what render when collection is empty --}}
          @each('user.userloop', $users, 'userData')

          @foreach ($users as $user)
            <tr>
              <td>{{$user['id']}}</td>
            </tr>
            <tr>
              <td>{{$user['name']}}</td>
            </tr>

            <tr>
              <a
              href="{{
                route('get.user.show',[
                  'userId'=>$user['id']
                ])
              }}"
              >szczgoly</a>
            </tr>
          @endforeach

          @for($i = 0;$i < count($users);$i++)
          {{-- imported from blade and pass $user--}}
            @include('user.userloop',
            ['userData'=>$user[$i]])

            @if ($i == 3)
              @break
            @endif
            {{-- lub mozna tak zapisac --}}
            @break($i == 3)
          @endfor

          @forelse ($users as $user)
          {{-- imported from blade and pass $user--}}
            @include('user.userloop',
            ['userData'=>$user])

            @empty
              <p>to sie wykona jak tablica jest pusta, np Loading...</p>
          @forelse

          {{-- while petla --}}
          @php 
            $j = 0;
          @endphp
          @while ($j < count($users))
            <tr>
              <td>{{$users[$j]['id']}}</td>
            </tr>
          @php 
            $j++;
          @endphp
          @endwhile

          {{-- doc laravel - for this loop --}}
          @foreach ($users as $user)
            {{$loop->index}}
             {{$loop->iteration}}
            <h1>{{$user['id']}}</h1>
          @endforeach
        </tr>
      </tbody>
    </table>
  </div>
</div>