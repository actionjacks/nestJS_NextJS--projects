#include <iostream>
#include <vector>
#include "myClass.h"

using std::cin; // std - standard namespaces
using std::cout;
using std::endl;
using std::string;
using std::vector;

class Player
{
public:
  string name{""};
  int hp{};

  void printName()
  {
    cout << name << endl;
  }
};

class ImplemntOutsideDecleratiorn
{
private:
  double bal;

public:
  // to jest prototyp sama implementacja zostanie napisana poza deklaracja klasy
  void set_balance(double balance);
};
void ImplemntOutsideDecleratiorn::set_balance(double balance)
{
  balance = bal;
};

int main()
{
  Player *player1 = new Player();
  player1->name = "jacek";
  (*player1).hp;
  player1->hp;

  player1->printName();

  delete player1;

  // USE IMPORTED CLASS
  MyClass useMyClass(2);
  useMyClass.SOMECLASSMETHOD();

  string fo;
  cin >> fo; // INPUT console - aby po skompilowaniu konsola sie nei zamknela

  return 0;
}