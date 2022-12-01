#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>
#include <cstring>
// for strings
using namespace std;

int main()
{
  std::cout << "C is alphabetic?" << std::isalpha('C') << std::endl;
  std::cout << "is blank?" << std::isblank(' ') << std::endl;
  std::cout << "is islower?" << std::islower('l') << std::endl;
  std::cout << "is isupper?" << std::isupper('L') << std::endl;

  char anyDigit[]{"jacek placek 12"};
  for (auto character : anyDigit)
  {
    if (std::isdigit(character))
    {
      std::cout << "character" << character << std::endl;
    }
  }

  char someString[]{"lorem lorem lorem"};
  for (size_t i{}; i < std::size(someString); i++)
  {
    someString[i] = std::toupper(someString[i]);
  }

  const char message1[] = "the Sky is blue";
  const char *message2 = "the Sky is blue";
  // return string char
  std::cout << "message1" << message1 << std::strlen(message1) << std::endl;
  // return string char and null ( spaces )
  std::cout << "message1" << message1 << sizeof(message1) << std::endl;

  // Funkcja zwraca wskaźnik na pierwsze znalezione wystąpienie znaku w łańcuchu znaków, który został przekazany jako argument.
  char sNapis[] = "Nasza dokumentacja C++";
  for (char *p = strchr(sNapis, 'a'); p != NULL; p = strchr(p + 1, 'a'))
    printf("Litera 'a' znajduje sie na pozycji: %d\n", p - sNapis);
  /*
    Litera 'a' znajduje sie na pozycji : 1
    Litera 'a' znajduje sie na pozycji : 4
    Litera 'a' znajduje sie na pozycji : 14
    Litera 'a' znajduje sie na pozycji : 17
  */

  const char *str1 = "trkoeTokfefe T T";
  const char *result = str1;

  char target_ = 'T';
  size_t iterations{};

  while ((result = std::strchr(result, target_)) != nullptr)
  {
    std::cout << "Found" << target_
              << "starting at" << result << "\n";
    ++result;
    ++iterations;
  }
  std::cout << "Iteratios " << iterations << std::endl;

  // declaring strings

  std::string name_; // empty string
  std::string planet{"lotem lote"};
  std::string planet_from_planet{planet};
  std::string message_mm{"Hello there", 5}; // initialize with part of string literal contains Hello
  std::string wierd_message{4, 'e'};        // initialize whit multiple copies of char containe eeee

  return 0;
}
