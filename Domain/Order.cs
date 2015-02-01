using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Order
    {
        public Order()
        {
            Gadgets = new List<Gadget>();
        }

        public int OrderID { get; set; }
        public string CompanyName { get; set; }
        public string OwnerName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }

        public List<Gadget> Gadgets { get; set; }
    }
}
