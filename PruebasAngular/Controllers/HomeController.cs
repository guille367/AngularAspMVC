using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PruebasAngular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult GetData(RecepcionSearchInput filtro, string fafa)
        {
            var response = new RecepcionOutputDataContract<RecepcionDataContract>();

            response.Page = filtro.Page;
            response.PageCount = 20;
            response.PageSize = 10;

            response.Items = new List<RecepcionDataContract>() {
                new RecepcionDataContract() { Descripcion = "aaa" },
                new RecepcionDataContract() { Descripcion = "bbb" },
                new RecepcionDataContract() { Descripcion = "ccc" },
            };

            return Json(response, JsonRequestBehavior.AllowGet);
        }

    }

    public interface InOutput
    {
        int Page { get; set; }
        int PageSize { get; set; }
        int PageCount { get; set; }
    }

    public class RecepcionSearchInput : InOutput
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        public string Fafa { get; set; }
    }

    public class RecepcionOutputDataContract<T> : InOutput
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        public IList<T> Items { get; set; }
    }

    public class RecepcionDataContract
    {
        public string Descripcion { get; set; }
    }
}