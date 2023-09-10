Utwórz lub aktywuj wirtualne środowisko (zalecane): Jeśli nie masz jeszcze aktywowanego wirtualnego środowiska, to jest dobry moment, aby to zrobić. Wirtualne środowisko izoluje zależności Twojego projektu od innych zainstalowanych na systemie. Możesz utworzyć nowe wirtualne środowisko za pomocą polecenia:

Copy code
python -m venv nazwa_venv
Następnie aktywuj środowisko, korzystając z komendy:

Windows:
Copy code
nazwa_venv\Scripts\activate
Linux/macOS:
bash
Copy code
source nazwa_venv/bin/activate
Zainstaluj zależności: Po aktywowaniu wirtualnego środowiska możesz zainstalować zależności z pliku requirements.txt za pomocą polecenia pip. Upewnij się, że jesteś w katalogu projektu, który zawiera plik requirements.txt, a następnie użyj komendy:

Copy code
pip install -r requirements.txt
Spowoduje to instalację wszystkich bibliotek wymienionych w pliku requirements.txt w Twoim wirtualnym środowisku.

Uruchom projekt: Po zainstalowaniu zależności możesz uruchomić swój projekt Pythona. Pamiętaj, że musisz aktywować wirtualne środowisko za każdym razem, gdy pracujesz nad projektem.

To wszystko! Teraz Twoje wirtualne środowisko Pythona powinno zawierać wszystkie wymagane zależności, które są wymienione w pliku requirements.txt, i możesz pracować nad swoim projektem w izolowanym środowisku.
