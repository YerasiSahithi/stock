package com.cts.project.pojo;
import java.util.Date;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
@Entity
@Table(name="ipo")
public class IPO {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) 

    private int id;
    private String companyName;
	  private String stockExchange;
	  private Integer price;
	  private Integer noShare;
	  private String remarks;
	  private String opendatetime;

	public String getOpendatetime() {
		return opendatetime;
	}
	public void setOpendatetime(String opendatetime) {
		this.opendatetime = opendatetime;
	}
	@Override
	public String toString() {
		return "IPO [Id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange + ", price="
				+ price + ", noShare=" + noShare + ", remarks=" + remarks + ", opendatetime=" + opendatetime + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public Integer getNoShare() {
		return noShare;
	}
	public void setNoShare(Integer noShare) {
		this.noShare = noShare;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

}
