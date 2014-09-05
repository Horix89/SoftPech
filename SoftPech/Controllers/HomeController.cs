using SoftPech.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SoftPech.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
         
            return RedirectToAction("Inicio");
        }

        public ActionResult Inicio()
        {
            ViewData["css"] = "Content/Site.css";
            ViewData["Controller"] = "Home";

            InicioViewModel inicioViewModel = new InicioViewModel();
            
            inicioViewModel.contacto = new Models.Contacto();

            inicioViewModel.contacto.ListAsuntos = new List<SelectListItem>()
            {
                new SelectListItem()
                {
                    Selected = true, Value = "Presupuesto", Text = "Presupuesto"
                },
                new SelectListItem()
                {
                    Selected = false, Value = "Consulta", Text = "Consulta"
                }
            };

            return View(inicioViewModel);
        }

        public ActionResult Contacto(Contacto model)
        {
            return View();
        }
    }
}