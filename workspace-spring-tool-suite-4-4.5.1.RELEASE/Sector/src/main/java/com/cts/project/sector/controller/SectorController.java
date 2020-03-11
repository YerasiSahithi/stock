package com.cts.project.sector.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.project.sector.dao.SectorRepository;
import com.cts.project.sector.pojo.Sector;


@RestController
@CrossOrigin(origins="*")
@RequestMapping("/Sector")

public class SectorController {
	@Autowired

	private SectorRepository sectorRepository;

	 @RequestMapping("/getAllSector")

	public Iterable<Sector> getAllSector()

	{

	 return sectorRepository.findAll();

	}

	 @PostMapping("/saveSector")

	 public Sector savesector(@RequestBody Sector sector)

	 {

	 System.out.println(sector);

	 sectorRepository.save(sector);

	 return sector;

	 }



	 @PutMapping("/updateSector/{id}")

	 public Sector updateSector(@RequestBody Sector sector,@PathVariable("id") int id)

	 {

	 System.out.println(sector);

	 sectorRepository.save(sector);
	 sector.setId(id);

	 return sector;

	 }

	 @DeleteMapping("/deleteSector/{id}")

	 public Boolean deleteSector(@PathVariable("id") int id)

	 {

	 System.out.println(id);

	 sectorRepository.deleteById(id);

	 return true;

	 }

	 @GetMapping("/findOneInAll1234/{id}")

	 public Sector findOneInAll1234 (@PathVariable("id") int id)

	 {
	 Optional<Sector> sector= sectorRepository.findById(id);

	 return sector.get();

	 }

}
