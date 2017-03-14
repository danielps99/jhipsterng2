package br.com.bdws.jhipsterng2.service;

import br.com.bdws.jhipsterng2.domain.Categoria;
import br.com.bdws.jhipsterng2.repository.CategoriaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Categoria.
 */
@Service
@Transactional
public class CategoriaService {

    private final Logger log = LoggerFactory.getLogger(CategoriaService.class);
    
    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    /**
     * Save a categoria.
     *
     * @param categoria the entity to save
     * @return the persisted entity
     */
    public Categoria save(Categoria categoria) {
        log.debug("Request to save Categoria : {}", categoria);
        Categoria result = categoriaRepository.save(categoria);
        return result;
    }

    /**
     *  Get all the categorias.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Categoria> findAll(Pageable pageable) {
        log.debug("Request to get all Categorias");
        Page<Categoria> result = categoriaRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one categoria by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Categoria findOne(Long id) {
        log.debug("Request to get Categoria : {}", id);
        Categoria categoria = categoriaRepository.findOne(id);
        return categoria;
    }

    /**
     *  Delete the  categoria by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Categoria : {}", id);
        categoriaRepository.delete(id);
    }
}
