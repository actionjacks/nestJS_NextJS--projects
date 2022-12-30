---plik--- .cpp

#include "moje_headery.h"

```
int main () {
  add_(45);

  return 0;
};
```

<!-- aby to zadzialalo tworzy sie plik z <nazwa>.h (h -czyli header) 
w pliku tworzymy abstrakcje funkcji lub klas
-
przykladowy pli:
  void add_ (int val);
  
  i w plku z ktorego jest funkcja wywołana 
  #indclude "nazwa_plku_z_headerm.h"
-->
```
void add_ (int val_) {
  return val + val;
};
void add_ (int val_, int val2) {
  return (val + val) * val2;
};
```
<!-- przeciazone funkcjie nie moge miec innego typu zwracanego musi sie zgadzac -->