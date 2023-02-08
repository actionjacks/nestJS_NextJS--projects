using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App2
{
  class Program
  {
    static void Main(string[] args)
    {
      // variables
      var aut = ""; //1, 2.3

      int nu = 1;
      int num22 = 2;
      nu += num22;
      num22++;
      num22--;

      float nu2 = 1.1f;
      double num3 = 1232.123;

      string name = "12";
      char oneChar = '1';

      bool zmi = true;

      // while(true) {
      // }

      for (int i = 0; i < 5; i++)
      {
      }

      // do
      // {
      // } while (true);

      //RZUTOWANIE - konwersja
      float dup = 12.3f;
      int dup_ = (int)dup; // 12

      string inp = "12";
      int res = int.Parse(inp); // 12
      string res2 = res.ToString(); // "12"


      // console
      string user_input = Console.ReadLine();
      Console.WriteLine(user_input);

      if (Console.ReadKey().Key == ConsoleKey.D1)
      {
        Console.WriteLine("1 wisniete!");
      }

      Console.WriteLine("Hello, World!");

      string xs = "12";
      string ys = "12";

      int x = int.Parse(xs);
      int y = int.Parse(ys);

      for (int i = 0; i < y; i++)
      {
        for (int o = 0; o < x; o++)
        {
          Console.Write("-");
        }
        Console.WriteLine("");
      }
      Console.ReadKey();
    }
  }
};