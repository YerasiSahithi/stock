package com.cts.project.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.dao.IPORepository;
import com.cts.project.pojo.IPO;


@RestController
@CrossOrigin(origins="*",allowedHeaders="*")  

@RequestMapping("/IPO")


public class IPOController {
	@Autowired
	private IPORepository ipoRepository;

	 @RequestMapping("/getAllIPO")

	public Iterable<IPO> getAllIPO()

	{

	 return ipoRepository.findAll();

	}

	 @PostMapping("/saveIPO")

	 public IPO saveIPO(@RequestBody IPO ipo)

	 {

	 System.out.println(ipo);

	 ipoRepository.save(ipo);

	 return ipo;

	 }



	 @PutMapping("/updateIPO/{id}")

	 public IPO updateIPO(@RequestBody IPO ipo,@PathVariable("id") int id)

	 {

	 System.out.println(ipo);

	 ipoRepository.save(ipo);
	 ipo.setId(id);

	 return ipo;

	 }

	 @DeleteMapping("/deleteIPO/{id}")

	 public Boolean deleteIPO(@PathVariable("id") int id)

	 {

	 System.out.println(id);

	 ipoRepository.deleteById(id);

	 return true;

	 }

	 @GetMapping("/findOneInAll123/{id}")

	 public IPO findoneinall(@PathVariable("id") int id)

	 {
	 Optional<IPO> ipo= ipoRepository.findById(id);

	 return ipo.get();

	 }


}
