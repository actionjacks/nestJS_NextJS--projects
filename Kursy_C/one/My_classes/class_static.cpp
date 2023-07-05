#include <iostream>

using std::cin; // std - standard namespaces
using std::cout;
using std::endl;
using std::string;

class Player
{
public:
  string name{""};
  int hp{};
  Player() { ++players_num; };
  ~Player() { --players_num; };

  void printName()
  {
    cout << name << endl;
  };

  static void get_num()
  {
    std::cout << players_num << std::endl;
  };

private:
  static int players_num;
};

// Definicja statycznego składnika players_num
int Player::players_num{0};

struct Person
{
  string name;
  int age;
  float height;
};

int main()
{
  Person person1; // Tworzenie obiektu struktury Person

  // Przypisanie wartości do pól struktury
  person1.name = "John Doe";
  person1.age = 30;
  person1.height = 175.5;

  // Wyświetlanie wartości pól struktury
  cout << "Name: " << person1.name << endl;
  cout << "Age: " << person1.age << endl;
  cout << "Height: " << person1.height << " cm" << endl;

  Player *player1 = new Player();
  Player player5 = Player();
  Player player3 = Player();
  Player player2 = Player();
  player1->name = "jacek";
  (*player1).hp;
  player1->hp;
  Player::get_num(); // call static method
  player1->printName();

  return 0;
}