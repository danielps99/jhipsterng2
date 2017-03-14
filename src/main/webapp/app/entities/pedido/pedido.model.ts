import { Pessoa } from '../pessoa';
export class Pedido {
    constructor(
        public id?: number,
        public vendedor?: string,
        public data?: any,
        public valorTotal?: number,
        public consumidor?: Pessoa,
    ) {
    }
}
