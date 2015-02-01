using DataAccess;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Store.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        // Renders Order details as soon as an order has been submitted
        public ActionResult ViewOrder(int id)
        {
            using (var context = new StoreContext())
            {
                var order = context.Orders.Find(id);

                var gadgetOrders = context.GadgetOrders.Where(go => go.OrderID == id);

                foreach(GadgetOrder gadgetOrder in gadgetOrders)
                {
                    context.Entry(gadgetOrder).Reference(go => go.Gadget).Load();
                    order.Gadgets.Add(gadgetOrder.Gadget);
                }

                return View(order);
            }
        }
    }
}