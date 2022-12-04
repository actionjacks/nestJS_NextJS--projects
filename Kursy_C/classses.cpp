#include <iostream>
#include <cmath>

class Cylinder
{
private:
  double base_radius = 1.0;
  double height = 1.0;
  double piValue = M_PI;

  // constructor
public:
  // Cylinder() = default; -- call when no passing params constructor
  Cylinder(); // default constructor
  Cylinder()
  {
    double base_radius = 2.0;
    double height = 2.0;
  };
  Cylinder(double base_radius_, double height_)
  {
    base_radius = base_radius_;
    height = height_;
  };
  double
  volume()
  {
    return piValue * base_radius * base_radius * height;
  }
};

/**
 * using class
 */
int fo()
{
  Cylinder cylinder1(1.2, 3.2);
  std::cout << "get cilinder" << cylinder1.volume() << std::endl;
  return 0;
};

// 20:38