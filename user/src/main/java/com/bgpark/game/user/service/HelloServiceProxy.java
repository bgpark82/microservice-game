package com.bgpark.game.user.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "multiplication", url = "${MULTIPLICATION_URL:localhost:8081}")
public interface HelloServiceProxy {

    @GetMapping("/")
    String hello();
}
