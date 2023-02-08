import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable()
export class MoedaService {

  private moedas: Moeda[] = [];

  constructor() {}

  private moedasObj = [//http://fixer.io
    { "sigla": "USD", "descricao": "Dólar dos Estados Unidos" },
    { "sigla": "BRL", "descricao": "Real brasileiro" },
    { "sigla": "EUR", "descricao": "Euro"},
    { "sigla": "GBP", "descricao": "Libra Esterlina"}
  ];

  listarTodas(): Moeda[] {
    if (this.moedas){
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
