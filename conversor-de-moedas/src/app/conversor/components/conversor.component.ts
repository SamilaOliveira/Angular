import { Component, OnInit, ViewChild } from '@angular/core';
import { MoedaService, ConversorService } from '../services';
import { NgForm } from '@angular/forms';
import { Moeda, Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public moedas: Moeda[] = [];
  public conversao!: Conversao;
  public possuiErro!: boolean;
  public conversaoResponse!: ConversaoResponse;

  @ViewChild('conversaoForm', { static: true })
  conversaoForm!: NgForm;

  constructor(
    public moedaService: MoedaService,
    public conversorService: ConversorService) {}

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão de valores.
   *
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', 0);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores
   *
   * @return void
   */
  converter(): void{
    if (this.conversaoForm.form.valid) {
      this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          error => this.possuiErro = true);
    }
  }

}
