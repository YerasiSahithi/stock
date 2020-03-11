package com.cts.project.stockprice.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.stockprice.pojo.StockPrice;

public interface StockPriceRepository  extends CrudRepository<StockPrice,Integer>{

}
