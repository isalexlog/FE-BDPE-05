package de.telran.employee.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ApplicationRestController {

    @RequestMapping(value = {
            "/",
            "lesson-actions"
    })
    public String indexHtml() {
        return "index.html";
    }
}
