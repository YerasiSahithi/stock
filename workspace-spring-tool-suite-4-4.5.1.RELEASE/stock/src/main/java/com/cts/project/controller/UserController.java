package com.cts.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;  

import com.cts.project.dao.Userrepository;
import com.cts.project.email.EmailService;
import com.cts.project.pojo.User;

@RestController
@CrossOrigin(origins="*")  

@RequestMapping("/UserPortal")

public class UserController {
	@Autowired

	private Userrepository userRepository;

	 @RequestMapping("/getAllUser")

	public Iterable<User> getAllUser()

	{

	 return userRepository.findAll();

	}
	 @Autowired

	   private EmailService emailService;

	 @PostMapping("/saveUser")

	 public User saveUser(@RequestBody User user) {

	 System.out.println(user);

	 userRepository.save(user);



	 StringBuffer mailContain= new StringBuffer();

	 mailContain.append("Hi "+user.getUserName()+"\n");

	 mailContain.append("Please Click on Below Click to Confirm Your Email With Us\n");

	 mailContain.append("<a href='http://localhost:8096/UserPortal/confirmEmail/"+user.getEmail()+">Click</a>\n");

	 mailContain.append("Thanks And Regards\n CTS Participant\n");



	 emailService.sendMail(user.getEmail(),"Email Confirmation", mailContain.toString());



	    //emailService.sendPreConfiguredMail("Ho ho ho");





	 return user;

	 }
	 @GetMapping("/confirmEmail/{email}")

	 public User confirmEmail(@PathVariable("email") String email)

	 {

	 Optional<User> user= userRepository.findByEmail(email);

	 if(user!=null && user.get()!=null)

	 {

	  User u=user.get();

	  u.setConfirmed("Yes");

	  userRepository.save(u);

	  return u;



	 }

	 return user.get();

	 }





	/* @PostMapping("/saveUser")

	 public User saveuser(@RequestBody User user)

	 {

	 System.out.println(user);

	 userRepository.save(user);

	 return user;

	 }*/



	 @PutMapping("/updateUser/{id}")

	 public User updateUser(@RequestBody User user,@PathVariable("id") int id)

	 {

	 System.out.println(user);

	 userRepository.save(user);
	 user.setId(id);

	 return user;

	 }

	 @DeleteMapping("/deleteUser/{id}")

	 public Boolean deleteUser(@PathVariable("id") int id)

	 {

	 System.out.println(id);

	 userRepository.deleteById(id);

	 return true;

	 }

	 @GetMapping("/findOneInAll/{id}")

	 public User findOneInAll(@PathVariable("id") int id)

	 {
	 Optional<User> user= userRepository.findById(id);

	 return user.get();

	 }
	 @GetMapping("/findByUserNameAndPassword/{userName}/{password}")

	 public User findByUserNameAndPassword(@PathVariable("userName") String userName ,@PathVariable("password") String password)

	 {
		 User user =userRepository.findByUserNameAndPasswordAndConfirmed(userName,password,"yes");
		 System.out.println(user);
	 return user;

	 }

}
