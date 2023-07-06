#include <cstring>
#include <iostream>
#include "Mystring.h"

// No-args constructor
Mystring::Mystring() : str{nullptr}
{
  str = new char[1];
  *str = '\0'; // W języku C i C++, znak null ('\0') reprezentuje koniec ciągu znaków. Jest to specjalny znak, który oznacza, że dana tablica znaków kończy się na tym miejscu.
};

Mystring::Mystring(const char *s) : str{nullptr}
{
  if (s == nullptr)
  {
    str = new char[1];
    *str = '\0';
  }
  else
  {
    str = new char[std::strlen(s) + 1];
    std::strcpy(str, s);
  }
};

// copy constructor
Mystring::Mystring(const Mystring &source) : str{nullptr}
{
  str = new char[std::strlen(source.str) + 1];
  std::strcpy(str, source.str);
};

Mystring::~Mystring()
{
  delete[] str;
};

Mystring &Mystring::operator=(const Mystring &rhs)
{
  if (this == &rhs)
  {
    return *this;
  }
  delete[] this->str;
  str = new char[std::strlen(rhs.str) + 1];
  std::strcpy(this->str, rhs.str);
  return *this;
}

void Mystring::display() const
{
  std::cout << str << ": " << get_lenght() << std::endl;
};

int Mystring::get_lenght() const { return std::strlen(str); };

const char *Mystring::get_str() const { return str; }