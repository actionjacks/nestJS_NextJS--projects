#include <iostream>
#include <mysql_driver.h>
#include <mysql_connection.h>

int main()
{
  sql::mysql::MySQL_Driver *driver;
  sql::Connection *con;

  // Inicjalizacja sterownika MySQL Connector/C++
  driver = sql::mysql::get_mysql_driver_instance();

  // Konfiguracja połączenia do bazy danych
  std::string host = "localhost";
  std::string user = "your_username";
  std::string password = "your_password";
  std::string database = "your_database";
  std::string port = "3306";

  // Nawiązanie połączenia
  con = driver->connect("tcp://" + host + ":" + port, user, password);
  con->setSchema(database);

  // Wykonanie zapytania
  sql::Statement *stmt;
  sql::ResultSet *res;

  stmt = con->createStatement();
  res = stmt->executeQuery("SELECT * FROM your_table");

  // Przetwarzanie wyników zapytania
  while (res->next())
  {
    std::cout << "ID: " << res->getInt("id") << ", Name: " << res->getString("name") << std::endl;
  }

  // Zwolnienie zasobów
  delete res;
  delete stmt;
  delete con;

  return 0;
}