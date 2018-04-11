package br.univel.farinhadigital.controller;

import br.univel.farinhadigital.model.Farinha;
import br.univel.farinhadigital.repository.FarinhaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class FarinhaController {

	@Autowired
	FarinhaRepository farinhaRepository;

	@GetMapping("/graos")
	public List<Farinha> getAllGraos() {
		return farinhaRepository.findAll();
	}

	@GetMapping("/graos/{id}")
	public ResponseEntity<Farinha> getFarinhaById(@PathVariable(value = "id") Long farinhaId) {
		Farinha farinha = farinhaRepository.findOne(farinhaId);
		if (farinha == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(farinha);
	}

	@PostMapping("/graos")
	public Farinha createFarinha(@Valid @RequestBody Farinha farinha) {
		return farinhaRepository.save(farinha);
	}

	@PutMapping("/graos/{id}")
	public ResponseEntity<Farinha> updateFarinha(@PathVariable(value = "id") Long farinhaId,
			@Valid @RequestBody Farinha farinha) {
		Farinha farinhaAtualizado = farinhaRepository.save(farinha);
		
		if (farinha == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(farinhaAtualizado);
	}

	@DeleteMapping("/graos/{id}")
	public ResponseEntity<Void> deleteFarinha(@PathVariable(value = "id") Long farinhaId) {
		
		Farinha farinha = farinhaRepository.findOne(farinhaId);

		if (farinha == null) {
			return ResponseEntity.notFound().build();
			
		} else {
			farinhaRepository.delete(farinha);
			
		}
		
		return ResponseEntity.ok().build();
	}
}
