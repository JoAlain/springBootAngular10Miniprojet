package joe.alain.miniprojet.controller;

import joe.alain.miniprojet.model.Produit;
import joe.alain.miniprojet.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ProduitController {

    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping("/produits")
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @GetMapping("/produits/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable(value = "id") Integer produitId)
            throws Exception {
        Produit produit = produitRepository.findById(produitId)
                .orElseThrow(() -> new Exception("Produit non trouvée pour cette Id: " + produitId));
        return ResponseEntity.ok().body(produit);
    }

    @PostMapping("/produits")
    public Produit createProduit(@Valid @RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @PutMapping("/produits/{id}")
    public ResponseEntity<Produit> updateProduit(@PathVariable(value = "id") Integer produitId, @Valid @RequestBody Produit produitDetails) throws Exception {
        Produit produit = produitRepository.findById(produitId).orElseThrow(() -> new Exception("Produit non trouvée pour cette Id: " + produitId));

        produit.setNom(produitDetails.getNom());
        produit.setCode(produitDetails.getCode());
        produit.setValidite(produitDetails.getValidite());
        produit.setPrix(produitDetails.getPrix());
        final Produit updatedProduit = produitRepository.save(produit);
        return ResponseEntity.ok(updatedProduit);
    }

    @DeleteMapping("/produits/{id}")
    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Integer produitId) throws Exception {
        Produit produit = produitRepository.findById(produitId).orElseThrow(() -> new Exception("Produit non trouvée pour cette Id: " + produitId));

        produitRepository.delete(produit);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
