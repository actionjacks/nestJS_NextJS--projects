## downland
```
https://docs.wxwidgets.org/
```
## extract
## go to folder
```
mkdir linuxbuild 
cd linuxbuild
cmake ..
```
# compile using 8 cores
```
make -j 8
```

```
g++ App.cpp -o prog `wx-config --cppflags --libs`
```