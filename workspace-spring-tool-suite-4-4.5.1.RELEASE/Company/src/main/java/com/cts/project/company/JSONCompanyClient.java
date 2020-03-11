package com.cts.project.company;

import java.util.List;



import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;



import com.cts.project.company.pojo.IPO;







@FeignClient(value = "jcompany", url = "http://localhost:8094/IPO/")

public interface JSONCompanyClient {



 @GetMapping("/findByCompanyName/{companyName}")

 public List<IPO> findByCompanyName(@PathVariable("companyName") String companyName);
}