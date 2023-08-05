using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Navigation;

namespace GuiAPP
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            myButtonName.FontSize = 18;
            myButtonName.Content = "custom content from code";
            myButtonName.Foreground = Brushes.Blue;

            // custom text block
            TextBlock mycustomTextBlock = new TextBlock();
            mycustomTextBlock.FontSize = 18;
            mycustomTextBlock.Text = "mycustom text block content";
            // this.Content = mycustomTextBlock; // Replace window content 
        }

        private void Onclik_RequestNavigate(object sender, RequestNavigateEventArgs e)
        {
            System.Diagnostics.Process.Start(e.Uri.AbsoluteUri);
        }

        private void MyButtonName_Click(object sender, RoutedEventArgs e)
        {
            double mySize = myLabel.FontSize;
            myLabel.FontSize = mySize + 1;

            myLabel.Content = "LABEL CHANGED FO BAR !!!";
        }

        private void MyButtonName_MouseEnter(object sender, System.Windows.Input.MouseEventArgs e)
        {
        }

        private void UpdateLabel()
        {
            string result = "Selected options: ";
            if (checkBox1.IsChecked == true)
            {
                result += "Option 1 ";
            }
            if (checkBox2.IsChecked == true)
            {
                result += "Option 2 ";
            }
            label.Content = result;
        }

        private void CheckBox_Checked(object sender, RoutedEventArgs e)
        {
            UpdateLabel();
        }

        private void CheckBox_Unchecked(object sender, RoutedEventArgs e)
        {
            UpdateLabel();
        }
    }
}
// 3:18