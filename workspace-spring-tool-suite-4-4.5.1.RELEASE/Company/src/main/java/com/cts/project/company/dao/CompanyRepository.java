package com.cts.project.company.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.company.pojo.Company;


public interface CompanyRepository extends  CrudRepository<Company,String> {

	
}
