package com.cts.project.stockexchange.controller;

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

import com.cts.project.stockexchange.dao.StockExchangeRepository;
import com.cts.project.stockexchange.pojo.StockExchange;


@RestController
@CrossOrigin(origins="*")  
@RequestMapping("/StockExchange")

public class StockexchangeController {
	@Autowired

	private StockExchangeRepository stockexchangeRepository;

	 @RequestMapping("/getAllStockExchange")

	public Iterable<StockExchange> getAllStockExchange()

	{

	 return stockexchangeRepository.findAll();

	}

	 @PostMapping("/saveStockExchange")

	 public StockExchange savestockexchange(@RequestBody StockExchange stockexchange)

	 {

	 System.out.println(stockexchange);

	 stockexchangeRepository.save(stockexchange);

	 return stockexchange;

	 }



	 @PutMapping("/updateStockExchange/{id}")

	 public StockExchange updateStockExchange(@RequestBody StockExchange stockexchange,@PathVariable("id") int id)

	 {

	 System.out.println(stockexchange);

	 stockexchangeRepository.save(stockexchange);
	 stockexchange.setId(id);

	 return stockexchange;

	 }

	 @DeleteMapping("/deleteStockExchange/{id}")

	 public Boolean deleteStockExchange(@PathVariable("id") int id)

	 {

	 System.out.println(id);

	 stockexchangeRepository.deleteById(id);

	 return true;

	 }

	 @GetMapping("/findOneInAll56/{id}")

	 public StockExchange findOneInAll56(@PathVariable("id") int id)

	 {
	 Optional<StockExchange> sector= stockexchangeRepository.findById(id);

	 return sector.get();

	 }


}
