using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SoftPech.Models
{
    public class Contacto
    {
        public string Correo { get; set; }
        public List<SelectListItem> ListAsuntos { get; set; }
        public string CodigoAsunto { get; set; }
        public string Mensaje { get; set; }
    }
}