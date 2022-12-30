#include <iostream>
#include "Man.h"

using namespace std;

int main()
{
  Man man("jacek");
  man.Greeting();

  Man *ptr;
  ptr = &man; // wskaznik uzyskuje adres obiektu man

  cout << ptr->name << endl;
}