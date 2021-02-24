package net.javaguides.springboot.websocket.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import net.javaguides.springboot.websocket.model.Greeting;
import net.javaguides.springboot.websocket.model.HelloMessage;
import net.javaguides.springboot.websocket.model.myCustomObj;

@Controller
public class GreetingController {
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
    	System.out.println(message);
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }
    
    @MessageMapping("/hi")
    @SendTo("/topic/greetings")
    public myCustomObj greetingHi(myCustomObj custom) throws Exception {
    	System.out.println(custom.toString());
        Thread.sleep(1000); // simulated delay
        return new myCustomObj(custom.getId(),custom.getName(),custom.getMobile());
    }
}
