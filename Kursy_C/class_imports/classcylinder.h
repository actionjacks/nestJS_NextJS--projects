#include "constants.h"

class Cylinder
{
private:
  double base_radius = 1.0;
  double height = 1.0;
  double piValue = piValue_;

  // constructor
public:
  // Cylinder() = default; -- call when no passing params constructor
  Cylinder(); // default constructor
              // rest of constructor in cylinder.cpp
  Cylinder(double base_radius_, double height_)
  {
    base_radius = base_radius_;
    height = height_;
  };
  double volume();
};
