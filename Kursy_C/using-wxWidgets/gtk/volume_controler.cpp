#include <gtk/gtk.h>
#include <string>

void on_volume_changed(GtkRange *range, gpointer data)
{
  int volume = gtk_range_get_value(range);
  std::string command = "amixer -D pulse sset Master " + std::to_string(volume) + "%";
  system(command.c_str());
};

int main(int argc, char *argv[])
{
  // Inicjalizacja GTK
  gtk_init(&argc, &argv);

  // Tworzenie okna głównego
  GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_title(GTK_WINDOW(window), "turbo suwak glosnosci");
  gtk_window_set_default_size(GTK_WINDOW(window), 300, 100);

  // Tworzenie suwaka
  GtkWidget *volume_slider = gtk_scale_new_with_range(GTK_ORIENTATION_HORIZONTAL, 0, 100, 1);
  gtk_scale_set_draw_value(GTK_SCALE(volume_slider), true);
  gtk_range_set_value(GTK_RANGE(volume_slider), 50); // Ustawienie początkowego poziomu głośności na 50

  // Połączenie zmiany wartości suwaka z zmianą poziomu głośności
  g_signal_connect(volume_slider, "value-changed", G_CALLBACK(on_volume_changed), nullptr);

  // Dodawanie suwaka do okna
  gtk_container_add(GTK_CONTAINER(window), volume_slider);

  // Wyświetlenie okna i pętla główna GTK
  gtk_widget_show_all(window);
  gtk_main();

  return 0;
}
