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

import com.cts.project.dao.StockPriceRepository;
import com.cts.project.pojo.StockPrice;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/StockPrice")


public class StockPriceController {
	@Autowired

	private StockPriceRepository stockpriceRepository;

	 @RequestMapping("/getAllStockPrice")

	public Iterable<StockPrice> getAllStockPrice()

	{

	 return stockpriceRepository.findAll();

	}

	 @PostMapping("/saveStockPrice")

	 public StockPrice saveStockPrice(@RequestBody StockPrice stockprice)

	 {

	 System.out.println(stockprice);

	 stockpriceRepository.save(stockprice);

	 return stockprice;

	 }



	 @PutMapping("/updateStockPrice/{companyCode}")

	 public StockPrice updateStockPrice(@RequestBody StockPrice stockprice,@PathVariable("companyCode") int companyCode)

	 {

	 stockprice.setCompanyCode(companyCode);

	 System.out.println(stockprice);

	 stockpriceRepository.save(stockprice);

	 return stockprice;

	 }

	 @DeleteMapping("/deleteStockPrice/{companyCode}")

	 public Boolean deleteStockPrice(@PathVariable("companyCode") int companyCode)

	 {

	 System.out.println(companyCode);

	 stockpriceRepository.deleteById(companyCode);

	 return true;

	 }

	 @GetMapping("/findOneInAll678/{companyCode}")

	 public StockPrice findOneInAll678(@PathVariable("companyCode") int companyCode)

	 {
	 Optional<StockPrice> stockprice= stockpriceRepository.findById(companyCode);

	 return stockprice.get();

	 }

}
