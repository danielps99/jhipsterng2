package br.com.bdws.jhipsterng2.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Pedido.
 */
@Entity
@Table(name = "pedido")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Pedido implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size(max = 15)
    @Column(name = "vendedor", length = 15)
    private String vendedor;

    @NotNull
    @Column(name = "data", nullable = false)
    private ZonedDateTime data;

    @Column(name = "valor_total", precision=10, scale=2)
    private BigDecimal valorTotal;

    @ManyToOne(optional = false)
    @NotNull
    private Pessoa consumidor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVendedor() {
        return vendedor;
    }

    public Pedido vendedor(String vendedor) {
        this.vendedor = vendedor;
        return this;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    public ZonedDateTime getData() {
        return data;
    }

    public Pedido data(ZonedDateTime data) {
        this.data = data;
        return this;
    }

    public void setData(ZonedDateTime data) {
        this.data = data;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public Pedido valorTotal(BigDecimal valorTotal) {
        this.valorTotal = valorTotal;
        return this;
    }

    public void setValorTotal(BigDecimal valorTotal) {
        this.valorTotal = valorTotal;
    }

    public Pessoa getConsumidor() {
        return consumidor;
    }

    public Pedido consumidor(Pessoa pessoa) {
        this.consumidor = pessoa;
        return this;
    }

    public void setConsumidor(Pessoa pessoa) {
        this.consumidor = pessoa;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Pedido pedido = (Pedido) o;
        if (pedido.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, pedido.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Pedido{" +
            "id=" + id +
            ", vendedor='" + vendedor + "'" +
            ", data='" + data + "'" +
            ", valorTotal='" + valorTotal + "'" +
            '}';
    }
}
