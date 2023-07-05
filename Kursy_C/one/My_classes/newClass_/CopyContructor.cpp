#include <string>
#include <iostream>

using std::cout;
using std::endl;
using std::string;

class Player
{
private:
  string name;
  int health;
  int xp;

public:
  string getName() { return name; };
  int getHealth() { return health; };
  int getXp() { return xp; };

  Player(string nameVal = "None", int Hp = 0, int xpV = 0);
  // COPY CONSTRUCOTR
  Player(const Player &source);
  ~Player(){};
};

Player::Player(string nameVal, int Hp, int xpV) : name{nameVal},
                                                  health{Hp},
                                                  xp{xpV} {};
// COPY CONSTRUCOTR
Player::Player(const Player &source) : name{source.name},
                                       health{source.health},
                                       xp{source.xp} {};

void display_player(Player p)
{
  cout << "Name" << p.getName() << endl;
  cout << "HP" << p.getHealth() << endl;
  cout << "XP" << p.getXp() << endl;
};

class Person
{
public:
  std::string name;

  // Konstruktor kopiujący
  Person(const Person &other) : name(other.name)
  {
    std::cout << "Wywołano konstruktor kopiujący dla osoby o imieniu: " << name << std::endl;
  }

  // Konstruktor
  Person(const std::string &n) : name(n)
  {
    std::cout << "Wywołano konstruktor dla osoby o imieniu: " << name << std::endl;
  }

  // Destruktor
  ~Person()
  {
    std::cout << "Wywołano destruktor dla osoby o imieniu: " << name << std::endl;
  }
};

class ShallowCopy
{
private:
  int *data;

public:
  void set_data(int d) { *data = d; }
  int get_data() { return *data; }

  ShallowCopy(int d){};
  ShallowCopy(const ShallowCopy &source){};
  ~ShallowCopy(){};
};

ShallowCopy::ShallowCopy(int d)
{
  data = new int;
  *data = d;
};
// copy construcotr
ShallowCopy::ShallowCopy(const ShallowCopy &source)
{
  data = new int;
  *data = *source.data; // now is deep copy
  // deep copy create new storage and copy values
};
// delegate constructor
ShallowCopy::ShallowCopy(const ShallowCopy &source)
    : ShallowCopy{*source.data} {};

ShallowCopy::~ShallowCopy()
{
  delete data;
};

void display_shallow(ShallowCopy s)
{
  cout << s.get_data() << endl;
};

int main()
{
  Player empty{"xxx", 10, 50};
  Player my_copy{empty};
  display_player(empty);

  // Tworzenie obiektu i wywołanie konstruktora
  Person person1("Alice");

  // Tworzenie nowego obiektu na podstawie istniejącego za pomocą konstruktora kopiującego
  Person person2 = person1;

  // Wyświetlanie informacji o obiektach
  std::cout << "Osoba 1: " << person1.name << std::endl;
  std::cout << "Osoba 2: " << person2.name << std::endl;

  ShallowCopy obj1_{100};
  display_shallow(obj1_);

  ShallowCopy obj2_{obj1_};
  obj2_.set_data(200);

  return 0;
};