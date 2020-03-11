package com.cts.project.ipo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.ipo.pojo.IPO;

public interface IPORepository extends  CrudRepository<IPO,Integer>{
Iterable<IPO> findAll();
	   List<IPO> findByCompanyName(String companyName); 

}
