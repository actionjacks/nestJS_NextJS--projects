#ifndef MY_CLASSDEF_H
#define MY_CLASSDEF_H

class My_ClassDef
{
public:
  int fo{};
  My_ClassDef();
  My_ClassDef(int newValue);
  My_ClassDef(float fobar, bool flag = false);
  ~My_ClassDef();
};

#endif // MY_CLASSDEF_H