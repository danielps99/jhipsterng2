package br.com.bdws.jhipsterng2.repository;

import br.com.bdws.jhipsterng2.domain.Pessoa;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Pessoa entity.
 */
@SuppressWarnings("unused")
public interface PessoaRepository extends JpaRepository<Pessoa,Long> {

}
