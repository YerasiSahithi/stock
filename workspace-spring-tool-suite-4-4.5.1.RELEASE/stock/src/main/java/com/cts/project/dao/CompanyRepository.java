package com.cts.project.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.pojo.Company;


public interface CompanyRepository extends  CrudRepository<Company,String> {

	
}
