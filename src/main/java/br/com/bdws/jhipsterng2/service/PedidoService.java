package br.com.bdws.jhipsterng2.service;

import br.com.bdws.jhipsterng2.domain.Pedido;
import br.com.bdws.jhipsterng2.repository.PedidoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Pedido.
 */
@Service
@Transactional
public class PedidoService {

    private final Logger log = LoggerFactory.getLogger(PedidoService.class);
    
    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    /**
     * Save a pedido.
     *
     * @param pedido the entity to save
     * @return the persisted entity
     */
    public Pedido save(Pedido pedido) {
        log.debug("Request to save Pedido : {}", pedido);
        Pedido result = pedidoRepository.save(pedido);
        return result;
    }

    /**
     *  Get all the pedidos.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Pedido> findAll(Pageable pageable) {
        log.debug("Request to get all Pedidos");
        Page<Pedido> result = pedidoRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one pedido by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Pedido findOne(Long id) {
        log.debug("Request to get Pedido : {}", id);
        Pedido pedido = pedidoRepository.findOne(id);
        return pedido;
    }

    /**
     *  Delete the  pedido by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Pedido : {}", id);
        pedidoRepository.delete(id);
    }
}
