import { Categoria } from '../categoria';
export class Produto {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public preco?: number,
        public estoqueMinimo?: number,
        public categoria?: Categoria,
    ) {
    }
}
