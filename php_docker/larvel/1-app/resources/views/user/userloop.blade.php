            <tr>
              <td>{{$userData['id']}}</td>
            </tr>
            <tr>
              <td>{{$userData['name']}}</td>
            </tr>

            <tr>
              <a
              href="{{
                route('get.user.show',[
                  'userId'=>$userData['id']
                ])
              }}"
              >szczgoly</a>
            </tr>