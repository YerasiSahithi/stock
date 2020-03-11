package com.cts.project.stockexchange.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.stockexchange.pojo.StockExchange;

public interface StockExchangeRepository extends CrudRepository<StockExchange,Integer>{

}
