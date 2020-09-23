package joe.alain.miniprojet.repository;

import joe.alain.miniprojet.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Integer>{
}
