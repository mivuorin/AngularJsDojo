using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using AngularDojo.Web.Models;

namespace AngularDojo.Web.Controllers
{
    public class LoanersController : ApiController
    {
        private static List<Loaner> loaners = new List<Loaner>
        {
            new Loaner{name = "Mikko", vouchers = 2},
            new Loaner{name = "Mikael", vouchers = 15},
            new Loaner{name = "Jani", vouchers = 1}
        };

        [HttpGet]
        [ActionName("loaners")]
        public IEnumerable<Loaner> GetAll()
        {
            return loaners;
        }

        [HttpPost]
        [ActionName("loaners")]
        public Loaner Save([FromBody]Loaner loaner)
        {
            loaners.Add(loaner);
            return loaner;
        }
    }
}
