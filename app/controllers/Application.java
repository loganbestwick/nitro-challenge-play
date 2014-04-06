package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public static Result part1() {
        return ok(views.html.part1.render());
    }

    public static Result part2() {
        return ok(views.html.part2.render());
    }

}
