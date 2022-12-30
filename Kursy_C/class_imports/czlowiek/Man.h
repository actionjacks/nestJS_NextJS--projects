#include <iostream>
#ifndef MAN_H
#define MAN_H

class Man
{
public:
  Man() = default;
  Man(std::string name);
  std::string name;
  void Greeting();

private:
};
#endif