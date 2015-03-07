using Domain;
using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace Store.Controllers
{
    public class TempOrdersController : ApiController
    {
        // GET: api/TempOrders
        public List<CartItem> GetTempOrders()
        {
            List<CartItem> cartItems = null;

            if (System.Web.HttpContext.Current.Session["Cart"] != null)
            {
                cartItems = (List<CartItem>)System.Web.HttpContext.Current.Session["Cart"];
            }

            return cartItems;
        }

        // POST: api/TempOrders
        [HttpPost]
        public HttpResponseMessage SaveOrder(List<CartItem> cartItems)
        {
            if (!ModelState.IsValid)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            System.Web.HttpContext.Current.Session["Cart"] = cartItems;

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
