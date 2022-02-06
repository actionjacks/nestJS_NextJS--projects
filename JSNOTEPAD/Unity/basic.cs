namespace CS_Basic {
  class Program {

    static void Main(string[] args){
    Console.WriteLine("yo yo ");

    int i = 56;
    float o = 2.4;
    bool = true;

    Console.WriteLine("yo yo " + i + o);

    switch (i)
    {
        case 1:
          break;
        case 2:
          break;

        default:
          return i;
    }

    Console.ReadKey();
    }
  }
  static bool SecondTest(int i){
    return i < 100;
  }
}

namespace CS_Basic {
  class Program_ {

      enum PlayerState {
        Idle,
        Attacking
      }
    static  PlayerState playerState;

    static void Main(string[] args){

      switch (playerState)
      {
          case PlayerState.Idle:
            break;
          case PlayerState.Attacking:
            break;
          default:
      }

      int[] intArray = new int[4];
      // or
      int[] intArray = new int[] {1,2,3,4,};

      List<int> intList = new List<int>() {1,2,3};
      foreach (int i in intList)
      {
          Console.WriteLine(i);
      }

      Console.ReadKey();
    }
  }
}