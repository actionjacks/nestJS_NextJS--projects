#include <iostream>
#include "my_classDefinition.h"

My_ClassDef::My_ClassDef() : My_ClassDef(0, true) {} // Delegacja konstruktora, wywołuje inny konstruktor przekazując mu argumenty
My_ClassDef::My_ClassDef(int newValue) : fo{newValue} {}
My_ClassDef::My_ClassDef(float fobar, bool flag) {} // Konstruktor z inną sygnaturą
My_ClassDef::~My_ClassDef() {}