package br.com.bdws.jhipsterng2.service;

import br.com.bdws.jhipsterng2.domain.Pessoa;
import br.com.bdws.jhipsterng2.repository.PessoaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing Pessoa.
 */
@Service
@Transactional
public class PessoaService {

    private final Logger log = LoggerFactory.getLogger(PessoaService.class);
    
    private final PessoaRepository pessoaRepository;

    public PessoaService(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    /**
     * Save a pessoa.
     *
     * @param pessoa the entity to save
     * @return the persisted entity
     */
    public Pessoa save(Pessoa pessoa) {
        log.debug("Request to save Pessoa : {}", pessoa);
        Pessoa result = pessoaRepository.save(pessoa);
        return result;
    }

    /**
     *  Get all the pessoas.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Pessoa> findAll(Pageable pageable) {
        log.debug("Request to get all Pessoas");
        Page<Pessoa> result = pessoaRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one pessoa by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Pessoa findOne(Long id) {
        log.debug("Request to get Pessoa : {}", id);
        Pessoa pessoa = pessoaRepository.findOne(id);
        return pessoa;
    }

    /**
     *  Delete the  pessoa by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Pessoa : {}", id);
        pessoaRepository.delete(id);
    }
}
