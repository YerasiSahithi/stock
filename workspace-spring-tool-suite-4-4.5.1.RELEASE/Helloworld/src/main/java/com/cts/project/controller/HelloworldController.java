package com.cts.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloworldController {
@RequestMapping("/hello")
	public String Hello()
{
	return "hello world";
}
}
