#include <iostream>

// operator OVerloading
class Vector
{
public:
  double x;
  double y;

  Vector(double x = 0.0, double y = 0.0) : x(x), y(y) {}
  // Przeciążenie operatora dodawania (+)
  Vector operator+(const Vector &other) const
  {
    return Vector(x + other.x, y + other.y);
  }
  // Przeciążenie operatora wyjścia (<<)
  friend std::ostream &operator<<(std::ostream &os, const Vector &vec)
  {
    os << "(" << vec.x << ", " << vec.y << ")";
    return os;
  }
};

int main()
{
  Vector v1(2.5, 3.8);
  Vector v2(1.2, 0.7);
  // dodawania (+) dla klasy Vector. Dzięki temu można dodawać dwa obiekty Vector jakby były liczbami. Przeciążono również operator wyjścia (<<), aby wygodnie wyświetlać obiekt Vector na strumieniu wyjściowym (std::cout).
  Vector sum = v1 + v2;
  std::cout << "Sum: " << sum << std::endl;

  return 0;
}