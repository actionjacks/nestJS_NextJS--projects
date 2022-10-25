## status 
sudo systemctl status mysql

## install 

Alekss Zukovskis
3 miesiące temu
1. sudo apt install alien, enter password
2. cd Downloads
3. sudo alien -d file.tar.gz

## Roor
```
sudo su
```

Ctr + L //czysci ekran

## poruszanie sie po katalogach
```
pwd = aktualna sciezka

ls -l = pokaz wszystkie pliki
ls -la = pokaz wszystkie plik oraz pokaz ukryte
ls -lah = pokaz wszystkie plik oraz pokaz ukryte oraz waga plikow

cd / = go to root

!! man <dowolna komenda> //man manual/instrukcja do komendy
to samo <dowolna komenda> --help

mv <plik lub folder ./costam/skryp.sh> . // do aktualnego katalogu
```
## pliki
```
touch <nazwa i rozszezenie> - tworzy nowy plik

mkdir <folder name>
mkdir -p /locat/locat/locat

cp <lokalizajca> <lokalizajca> = kopiowanie np cp /dupa/text.md /dupa2/
mv <stara nazwa pliku> <nowa pliku> = przenoszenie pliku/ zmiana nazwy z jednego plku na drogi

mv <katalog> <do nowej lokalizacji lub katalogu> - przenoszenie

rm <folder or file>
rm *.md = usun wszystkie pliki z rozszezeniem md
rm -rf <folder or file> //usun folder i pliki -r =renukrencyjnie, -f = force

```

## aktualizacji instalacja
```
sudo apt update = pobiera najnowsze aktualizacje zainstalowanych programow
sudo apt upgrade = aktualizacja

sudo apt install <nazwa pakietu>
sudo apt remove <nazwa pakietu>
```

## historia
```
cntr + P = wyszukiwanie w histori
```

## logi
```
nano /var/log/syslog = pokaz logi systemowe przy uzyciu NANO

head -n 3 .bash_history - wyswietle 3 ostatnie komendy 
tail -n 3 .bash_history - 3 od konca
```

## dyski
```
df -h = wyswietla uzyte zajete miejsce
```

## uprawnienia

```
drwxr-xr-x 4 dev-jack dev-jack     4096 sie 26 20:17  node_modules
-rw-r--r-- 1 root     root           84 sie 26 20:17  package.json
-rw-r--r-- 1 root     root         1306 sie 26 20:17  package-lock.json
-rw-rw-r-- 1 dev-jack dev-jack     3690 mar 25 01:15  packages-microsoft-prod.d

dziesiec pol 
1# (- l d) - l = link d = direcotry
2# 3# 4# = odnosza sie do wlasciciela pliku 
5# 6# 7# = odnosza sie do grupy uzytkownika
8# 9# 10# = odnosza sie do wszystkich innych uzytkownikow
```
```
(r - uprawnienia do czytania ) read
(w - uprawnienia do zapisywania) write
(x - uprawnienia do wykonywania)  execute
```
## nadawania uprawnienia
```
          (u - user(jako ovner), g - group, o - others)
chmod u+x <plik>
            (- +) (r w x)
```

## 
```
ps -A = show snapshot of active process

watch -n 1 date = wyswietla aktualny czas i odswieza po sekundzie

alias szukaj="grep -rn . -e" = tworzy skrypt //mozna uzyc wpisujac teraz:
szukaj dupa

apt search programow
apt purge program usuwa program i jego zaleznosci
```

## TAR. i dpkg
```
tar -czvf nazwa.tar.gz sciezka/do/pliku ktore maja zostac spakowane
-c / -x create utworz archiwum, x extrac rozpakuje
-z uruchom kompresje lub dekompresje
-v wyświetla efekt na konsoli
-f pozwnala na podanie nazwy archiwum
```

```
dpkg -i program.deb -i install 
```

## logi
```
/var/log

cat plik logu - wyswietlenie
```

## pipe
  |   (pipe wynikiem jednej komendy staje sie paramatr do drogiej)
```
history | grep sudo = wyszukanie w terminalu komend z sudo
```

## crontab = [planowanie skryptow do wykonania]
https://www.cherryservers.com/blog/how-to-use-cron-to-automate-linux-jobs-on-ubuntu-20-04
```
crontab -e =crontab list mozna  z sudo kazdy krontab ma swoja liste
```

## wyswietlanie aktywnych processow
```
ps -aux | less
ps axuk +cpu -U <user> = wyswietla zuzycie procesora dla uzytkownika
```

## servisy
```
systemctl = zarzadzanie servisami
```

## zaawansowane
mozna uzyć komendy np cut -c 1-3 plik.txt >> SomeFile.txt
```
cut -c[zasieg] plik // np cut -c 1,2,3 auta.txt // zwroci pierwsze 3 znacy z lewej strony
// mozna tez ucyz 1-3 lub 4-8 

cut -d " " -f 2 auto.txt // -d "delimiter" // zwroc 2 wiersz odzielony spacja (" ") lub w plikach .csv "," 

table | table | table
row   ,  row  ,  row <===przecinek to delimiter
```
## sed
```
sed s/Czarny/Zielony plik.txt //zamieni w pliku lewy na prawy
```

## MAWK - jezyk skryptowy
```
awk '{print}' plik.txt //wyswietli zawartosc pliku
awk '{print $n}' plik.txt //n - to ktory rzad ma zwrocic i wyswietlic

```

## hosts
```
/etc$ cat hosts //plik z danymi polaczeniami protokołami
dodanie ręczne to np 35.246.6.109    www.pandait.pl panda
```