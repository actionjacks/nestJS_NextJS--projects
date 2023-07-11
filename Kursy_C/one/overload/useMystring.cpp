#include <iostream>
#include "Mystring.h"

using namespace std;

int main()
{
  Mystring empty;
  Mystring jack{"Jack"};

  Mystring stooge{jack}; // copy construcotr

  empty.display();
  jack.display();
  stooge.display();

  Mystring a{"Hello"};
  Mystring b;
  b = a;

  b = "This is a test";

  Mystring jackjack{"JackJack"};
  Mystring kakao{"kakao"};

  Mystring stooge = jackjack;
  jackjack.display(); // JackJack
  kakao.display();    // kakao

  cout << (jackjack == kakao) << endl;  // false
  cout << (jackjack == stooge) << endl; // true

  jackjack.display(); // JackJack
  Mystring jackjack2 = -jackjack;
  jackjack2.display(); // jackjack

  Mystring stooges = jackjack + "kakao";

  return 0;
}