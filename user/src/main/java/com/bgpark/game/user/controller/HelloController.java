package com.bgpark.game.user.controller;

import com.bgpark.game.user.service.HelloServiceProxy;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HelloController {

    private final HelloServiceProxy helloServiceProxy;

    @GetMapping
    public String hello() {
        String message = helloServiceProxy.hello();
        return "Message from Multiplication : " + message;
    }
}
