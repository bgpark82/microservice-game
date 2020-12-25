package com.bgpark.game.user.controller;

import com.bgpark.game.user.service.HelloServiceProxy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class HelloController {

    private final HelloServiceProxy helloServiceProxy;

    @GetMapping
    public String hello() {
        log.info("=====>> before send feign");
        String message = helloServiceProxy.hello();
        log.info("=====>> after receiv feign : {}" + message);
        return "Message from Multiplication : " + message;
    }
}
