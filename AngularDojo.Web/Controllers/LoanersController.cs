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
        private static Dictionary<string, Loaner> loaners = new Dictionary<string, Loaner>
        {
            {"Mikko", new Loaner{name = "Mikko", vouchers = 2}},
            {"Mikael", new Loaner{name = "Mikael", vouchers = 15}},
            {"Jani", new Loaner{name = "Jani", vouchers = 1}}
        };
        
        [HttpGet]
        [ActionName("loaners")]
        public IEnumerable<Loaner> GetAll()
        {
            return loaners.Values;
        }

        [HttpPost]
        [ActionName("loaners")]
        public Loaner Save([FromBody]Loaner loaner)
        {
            if (loaners.ContainsKey(loaner.name))
            {
                loaners[loaner.name].vouchers++;
            }
            else
            {
                loaners.Add(loaner.name, loaner);
            }
            return loaner;
        }
    }
}
