package com.cts.project.stockexchange.pojo;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="stockexchange")
public class StockExchange {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id;
	  private String stockExchange;
	  private String brief;
	  private String contactAddress;
	  private String remarks;
	@Override
	public String toString() {
		return "StockExchange [Id=" + id + ", stockExchange=" + stockExchange + ", brief=" + brief + ", contactAddress="
				+ contactAddress + ", remarks=" + remarks + "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getContactAddress() {
		return contactAddress;
	}
	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

}
