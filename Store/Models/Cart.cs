using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Store.Models
{
    public class CartItem
    {
        public int Count { get; set; }
        public int GadgetID { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public int CategoryID { get; set; }
    }
}