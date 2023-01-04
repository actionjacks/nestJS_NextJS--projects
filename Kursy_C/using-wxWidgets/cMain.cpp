#include "cMain.h"

cMain::cMain() : wxFrame(nullptr, wxID_ANY, "lotem ipsum", wxPoint(30, 30), wxSize(800, 600))
{
  // this is window
  // m_btn1 = new wxButton(this, 10001, "Dodaj TEXT DO LISTY", wxPoint(10, 10), wxSize(150, 50));
  // m_txt1 = new wxTextCtrl(this, wxID_ANY, "", wxPoint(10, 70), wxSize(300, 30));
  // m_list1 = new wxListBox(this, wxID_ANY, wxPoint(10, 110), wxSize(300, 300));

  btn = new wxButton *[nFieldWidth * nFieldHeight];
  wxGridSizer *grid = new wxGridSizer(nFieldWidth, nFieldHeight, 0, 0);

  Bind(wxEVT_BUTTON, &cMain::OnButtonClicked, this, 10001);
}

cMain::~cMain()
{
}

void cMain::OnButtonClicked(wxCommandEvent &event)
{
  // m_list1->AppendString(m_txt1->GetValue());
  event.Skip();
}