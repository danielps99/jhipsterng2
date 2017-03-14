package br.com.bdws.jhipsterng2.repository;

import br.com.bdws.jhipsterng2.domain.Pedido;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Pedido entity.
 */
@SuppressWarnings("unused")
public interface PedidoRepository extends JpaRepository<Pedido,Long> {

}
