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

      //Array's
      int[] mojaarrahy = new int[300];//tablica z 300 elementami
      string[] mojearray2 = { "dup", "ds", "423423" };

      Console.WriteLine(mojaarrahy[0]);

      for (int i = 0; i < mojearray2.Length; i++)
      {
        Console.WriteLine(mojearray2[i]);
      }

      int[,] arraj2d = new int[2, 3];//[[1,3,4], [2,4,8]]
      for (int i = 0; i < arraj2d.GetLongLength(0); i++)
      {
        for (int j = 0; j < arraj2d.GetLength(1); j++)
        {
          Console.WriteLine(arraj2d[i, j]);
        }
      }

      int[][] tabs = new int[2][];
      // Initialize the elements.
      tabs[0] = new int[5] { 1, 3, 5, 7, 9 };
      tabs[1] = new int[4] { 2, 4, 6, 8 };

      // Display the array elements.
      for (int i = 0; i < tabs.Length; i++)
      {
        System.Console.Write("Element({0}): ", i);

        for (int j = 0; j < tabs[i].Length; j++)
        {
          System.Console.Write("{0}{1}", tabs[i][j], j == (tabs[i].Length - 1)
          ? ""
          : " ");
        }
        System.Console.WriteLine();
      }

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

      // random
      Random rndom = new Random();
      //range
      int randomNumber = rndom.Next(1, 11);

      // instrukcje przerwani

      int a = 0;

      while (true)
      {
        if (a > 10)
        {
          break;
        }
        a++;
        Console.WriteLine(a);
      }

      // while(true) {
      // }

      for (int i = 0; i < 20; i++)
      {
        if (i % 2 == 1)
        {
          continue;
        }
        Console.WriteLine(i);
      }

    // do
    // {
    // } while (true);

    // etykiety 
    etykieta1:
      Console.Write("Etykieta1");
      goto etykieta3;

    etykieta2:
      Console.Write("Etykieta2");
      goto etykieta3;

    etykieta3:
      Console.Write("Etykieta3");
    }
  }
};