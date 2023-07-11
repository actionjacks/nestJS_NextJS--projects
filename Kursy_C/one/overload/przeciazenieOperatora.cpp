class Vector
{
private:
  int x, y;

public:
  Vector(int _x, int _y) : x(_x), y(_y) {}

  Vector operator+(const Vector &other) const
  {
    return Vector(x + other.x, y + other.y);
  }
};

Vector v1(1, 2);
Vector v2(3, 4);
Vector result = v1 + v2; // (x + x) + (y + y)
