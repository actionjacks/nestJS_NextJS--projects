class Pointer
{

public:
  int x, y;
  Pointer() {}

  Pointer(int a, int b) : x(a), y(b) {}

  Pointer operator+(Pointer &obj)
  {
    Pointer result;
    result.x = x + obj.x;
    result.y = y + obj.y;
    return result;
  }
};

int main()
{
  Pointer X(3, 4);
  Pointer Y(3, 4);

  Pointer Z;
  Z = X + Y;

  return 0;
};