package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.about;
import views.html.index;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    public static Result about() {
        return ok(about.render());
    }

}
