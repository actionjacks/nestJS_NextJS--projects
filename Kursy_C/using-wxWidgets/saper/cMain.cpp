#include "cMain.h"

cMain::cMain() : wxFrame(nullptr, wxID_ANY, "lotem ipsum", wxPoint(30, 30), wxSize(800, 600))
{
  // this is window
  // m_btn1 = new wxButton(this, 10001, "Dodaj TEXT DO LISTY", wxPoint(10, 10), wxSize(150, 50));
  // m_txt1 = new wxTextCtrl(this, wxID_ANY, "", wxPoint(10, 70), wxSize(300, 30));
  // m_list1 = new wxListBox(this, wxID_ANY, wxPoint(10, 110), wxSize(300, 300));

  // Bind(wxEVT_BUTTON, &cMain::OnButtonClicked, this, 10001);

  btn = new wxButton *[nFieldWidth * nFieldHeight];
  wxGridSizer *grid = new wxGridSizer(nFieldWidth, nFieldHeight, 0, 0);

  nField = new int[nFieldWidth * nFieldHeight];
  wxFont font(24, wxFONTFAMILY_DEFAULT, wxFONTSTYLE_NORMAL, wxFONTWEIGHT_BOLD, false);

  for (int x = 0; x < nFieldWidth; x++)
  {
    for (int y = 0; y < nFieldHeight; y++)
    {
      btn[y * nFieldWidth + x] = new wxButton(this, 10000 + (y * nFieldWidth + x));
      btn[y * nFieldWidth + x]->SetFont(font);                  // add font to btn
      grid->Add(btn[y * nFieldWidth + x], 1, wxEXPAND | wxALL); // add button to grid

      btn[y * nFieldWidth + x]->Bind(wxEVT_COMMAND_BUTTON_CLICKED, &cMain::OnButtonClicked, this);

      nField[y * nFieldWidth + x] = 0;
    }
  }
  this->SetSizer(grid);
  grid->Layout();
}

cMain::~cMain()
{
  delete[] btn; // del array of buttons
}

// void cMain::OnButtonClicked(wxCommandEvent &event)
// {
//    m_list1->AppendString(m_txt1->GetValue());
//   event.Skip();
// }

void cMain::OnButtonClicked(wxCommandEvent &event)
{
  // get coordinate of button is field array
  int x = (event.GetId() - 10000) % nFieldWidth;
  int y = (event.GetId() - 10000) / nFieldWidth;

  if (bFirstClick)
  {
    int mines = 30;
    while (mines)
    {
      int rx = rand() % nFieldWidth;
      int ry = rand() % nFieldHeight;

      if (nField[ry * nFieldWidth + rx] == 0 && rx != x && ry != y)
      {
        nField[ry * nFieldWidth + rx] = -1;
        mines--;
      }
    }
    bFirstClick = false;
  }
  // disable button preventing it being pressed again
  btn[y * nFieldWidth + x]->Enable(false);

  // check if player hit mine
  if (nField[y * nFieldWidth + x] == -1)
  {
    wxMessageBox("BOOOM! - Game Over");
    // reset game
    bFirstClick = true;

    for (int x = 0; x < nFieldWidth; x++)
      for (int y = 0; y < nFieldHeight; y++)
      {
        nField[y * nFieldWidth + x] = 0;
        btn[y * nFieldWidth + x]->SetLabel("");
        btn[y * nFieldWidth + x]->Enable(true);
      }
  }
  else
  {
    // count neighbouring mines
    int mine_count = 0;
    for (int i = -1; i < 2; i++)
      for (int j = -1; j < 2; j++)
      {
        if (x + i >= 0 && x + i < nFieldWidth && y + j >= 0 && y + j < nFieldHeight)
        {
          if (nField[(y + j) * nFieldWidth + (x + i)] == -1)
            mine_count++;
        }
      }
    // update buttons label to show mine count if > 0
    if (mine_count > 0)
    {
      btn[y * nFieldWidth + x]->SetLabel(std::to_string(mine_count));
    }
  }

  event.Skip();
}