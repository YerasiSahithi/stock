package com.cts.project.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name="user")
public class User {
	     @Id
	     @GeneratedValue(strategy=GenerationType.IDENTITY) 
	      private int id;
	      private String userName;
		  private String password;
		  private String userType;
		  private String email;
		  private String phone;
		private String confirmed;
		@Override
		public String toString() {
			return "User [Id=" + id + ", userName=" + userName + ", password=" + password + ", userType=" + userType
					+ ", email=" + email + ", phone=" + phone + ", confirmed=" + confirmed + "]";
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getUserType() {
			return userType;
		}
		public void setUserType(String userType) {
			this.userType = userType;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getConfirmed() {
			return confirmed;
		}
		public void setConfirmed(String confirmed) {
			this.confirmed = confirmed;
		}
		  public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}

}  
