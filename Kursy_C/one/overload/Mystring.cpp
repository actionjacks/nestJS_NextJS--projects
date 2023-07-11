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

// Equality
bool Mystring::operator==(const Mystring &rhs) const
{
  return (std::strcmp(str, rhs.str) == 0);
};

// to lowercase
Mystring Mystring::operator-() const
{
  char *buff = new char[std::strlen(str) + 1];
  std::strcpy(buff, str); // copy string from str to buff
  for (size_t i = 0; i < std::strlen(buff); i++)
  {
    buff[i] = std::tolower(buff[i]);
    Mystring temp{buff};
    delete[] buff;
    return temp;
  }
}

// Concatentate
Mystring Mystring::operator+(const Mystring &rhs) const
{
  char *buff = new char[std::strlen(str) + std::strlen(rhs.str) + 1];
  std::strcpy(buff, str);
  std::strcat(buff, rhs.str);
  Mystring temp{buff};
  delete[] buff;
  return temp;
}

void Mystring::display() const
{
  std::cout << str << ": " << get_lenght() << std::endl;
};

int Mystring::get_lenght() const { return std::strlen(str); };

const char *Mystring::get_str() const { return str; }