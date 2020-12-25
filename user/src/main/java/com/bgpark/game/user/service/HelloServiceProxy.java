package com.bgpark.game.user.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "gateway")
public interface HelloServiceProxy {

    @GetMapping("/api/multiplication")
    String hello();
}
