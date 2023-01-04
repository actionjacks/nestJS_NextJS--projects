#include <gtk/gtk.h>
#include <stdio.h>

void set_volume(GtkWidget *slider, gpointer data)
{
  int value = gtk_range_get_value(GTK_RANGE(slider));
  char command[256];
  sprintf(command, "amixer set Master %d%%", value);
  system(command);
};

int main(int argc, char *argv[])
{
  GtkWidget *window;
  GtkWidget *slider;
  GtkAdjustment *adjustment;

  gtk_init(&argc, &argv);

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_title(GTK_WINDOW(window), "GTK Volume Control Example");
  gtk_window_set_default_size(GTK_WINDOW(window), 300, 200);

  adjustment = gtk_adjustment_new(50.0, 0.0, 100.0, 1.0, 1.0, 1.0);
  slider = gtk_scale_new(GTK_ORIENTATION_HORIZONTAL, adjustment);
  gtk_scale_set_digits(GTK_SCALE(slider), 0);

  gtk_container_add(GTK_CONTAINER(window), slider);

  g_signal_connect(G_OBJECT(slider), "value-changed", G_CALLBACK(set_volume), NULL);
  g_signal_connect(G_OBJECT(window), "destroy", G_CALLBACK(gtk_main_quit), NULL);

  gtk_widget_show_all(window);
  gtk_main();

  return 0;
}
