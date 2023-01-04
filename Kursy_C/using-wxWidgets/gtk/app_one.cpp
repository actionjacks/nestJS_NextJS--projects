#include <gtk/gtk.h>
#include <iostream>

int main(int argc, char *argv[])
{
  GtkWidget *window;
  GtkWidget *text_field;
  GtkWidget *button;
  GtkWidget *button_box;

  gtk_init(&argc, &argv);

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_title(GTK_WINDOW(window), "GTK Text Field and Button Example");
  gtk_window_set_default_size(GTK_WINDOW(window), 300, 200);

  text_field = gtk_entry_new();
  button = gtk_button_new_with_label("Click me!");

  button_box = gtk_button_box_new(GTK_ORIENTATION_HORIZONTAL);
  gtk_container_add(GTK_CONTAINER(button_box), text_field);
  gtk_container_add(GTK_CONTAINER(button_box), button);

  gtk_container_add(GTK_CONTAINER(window), button_box);

  g_signal_connect(button, "clicked", G_CALLBACK(gtk_main_quit), NULL);

  gtk_widget_show_all(window);
  gtk_main();

  return 0;
}
