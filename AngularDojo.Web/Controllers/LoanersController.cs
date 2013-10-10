using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularDojo.Web.Models;

namespace AngularDojo.Web.Controllers
{
    public class LoanersController : ApiController
    {
        [HttpGet]
        [ActionName("loaners")]
        public IEnumerable<Loaner> GetAll()
        {
            return new[]
            {
                new Loaner{Name = "Mikko", Vouchers = 2},
                new Loaner{Name = "Mikael", Vouchers = 15},
                new Loaner{Name = "Jani", Vouchers = 1}
            };
        }

    }
}
