#ifndef _MYSTRING_H_
#define _MYSTRING_H_

class Mystring
{
private:
  char *str;

public:
  Mystring();
  Mystring(const char *s);
  Mystring(const Mystring &source);

  // overloading ' == - + '
  Mystring operator-() const;                    // make lowercase
  Mystring operator+(const Mystring &rhs) const; // concatenate
  bool operator==(const Mystring &rhs) const;
  // overloading '='
  Mystring &operator=(const Mystring &rhs);

  ~Mystring();

  void display() const;
  int get_lenght() const;
  const char *get_str() const;
};

#endif