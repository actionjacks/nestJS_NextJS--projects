import PyPDF2
f = open('some_file.pdf', 'rb')  # rb = read binary
pdf_reader = PyPDF2.PdfFileReader(f)
pdf_reader.numPages()

page_one = pdf_reader._get_page(0)
page_on_text = page_one.extract_text()
