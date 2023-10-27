import { Content, Controller, Get, QueryParam, Redirect } from "alosaur/mod.ts";

@Controller()
export class HomeController {
  @Get()
  redirectToUI() {
    return Redirect("/");
  }

  @Get("/admin")
  redirectToAdminUI() {
    return Redirect("/admin/");
  }

  @Get("/query-name")
  text(@QueryParam("name") name: string) {
    return Content(`Hey! ${name}`);
  }
}
