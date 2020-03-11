package com.cts.project.pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="company")
public class Company {
    @Id
    private String companyName;
	  private Integer turnOver;
	  private String ceo;
	  private String bod;
	  private String sector;
	  private String brief;
	  private Integer stockCode;
	@Override
	public String toString() {
		return "Company [companyName=" + companyName + ", turnOver=" + turnOver + ", ceo=" + ceo + ", bod=" + bod
				+ ", sector=" + sector + ", brief=" + brief + ", stockCode=" + stockCode + "]";
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Integer getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(Integer turnOver) {
		this.turnOver = turnOver;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBod() {
		return bod;
	}
	public void setBod(String bod) {
		this.bod = bod;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public Integer getStockCode() {
		return stockCode;
	}
	public void setStockCode(Integer stockCode) {
		this.stockCode = stockCode;
	}

}
