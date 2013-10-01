using System.Web.Optimization;

namespace AngularDojo.Web.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            var bundle = new Bundle("~/js")
                .Include(
                "~/Scripts/lib/angular-1.2.0-rc.2/angular.js", 
                "~/Scripts/lib/ui-bootstrap-custom/ui-bootstrap-custom-0.6.0.js",
                "~/Scripts/lib/ui-bootstrap-custom/ui-bootstrap-custom-tpls-0.6.0.js",
                "~/Scripts/*.js");
            bundles.Add(bundle);

            var css = new Bundle("~/css")
                .Include("~/Content/bootstrap.css");

            bundles.Add(css);
        }
    }
}