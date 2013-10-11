namespace AngularDojo.Web.Models
{
    public class Loaner
    {
        private int _vouchers = 1;

        public string name { get; set; }
        public int vouchers
        {
            get { return _vouchers; }
            set { _vouchers = value; }
        }
    }
}