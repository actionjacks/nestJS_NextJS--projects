#include <iostream>
#include <vector>
#include <cstring> // for c-style string functions
#include <cctype>  //for character-based function
#include <string>

using namespace std;

int main()
{
  char initialName[20]{"fofofofo"};
  char toCopy[20]{};

  cout << "__ " << strlen(initialName) << endl; // print char lenght

  strcpy(toCopy, initialName); // copy initialName to toCopy
  strcat(initialName, "@");    // conncatenate initialName and a @
  strcat(toCopy, initialName); // concatenate initialName and toCopy

  string fo{"fo1"};
  string fo2{"fo2"};

  string sentence{};
  sentence = fo + fo2;
  cout << sentence << endl;

  string s1{"jacek placel"};
  for (int c : s1)
    cout << c << endl;

  cout << s1.substr(0, 4) << endl; // jace
  return 0;
}