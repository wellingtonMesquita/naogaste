import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Carteira } from 'src/app/models/carteira';
import { CarteiraService } from 'src/app/services/carteira.service';

@Component({
  selector: 'app-carteira-cadastro',
  templateUrl: './carteira-cadastro.component.html',
  styleUrls: ['./carteira-cadastro.component.scss']
})
export class CarteiraCadastroComponent implements OnInit {

  options: FormGroup;
  valor = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required])
  carteiraValue = 0.0;

  getErrorMessage() {
    if (this.valor.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.type.hasError('required')){
      return 'You must enter a value';
    }

    return '';
   
  }

  constructor(fb: FormBuilder, private carteriraService: CarteiraService ) {
    this.options = fb.group({
      valor: this.valor,
      type: this.type,
    });
  }


  saveCarteira(carteira:any){
    console.log("asda");
    this.carteriraService.saveCarteira(carteira).subscribe(()=>{
      this.getCarteiraValue();
      console.log('sucesso');
    })
  }
  submit(){
    var valor = this.options.get('valor')?.value;
    var type  = this.options.get('type')?.value;
    let carteira = {valor:0};
    carteira.valor = valor;
    if(type == '0'){
      carteira.valor+=this.carteiraValue;
    }else{
      carteira.valor = (this.carteiraValue-carteira.valor);
    }
    this.saveCarteira(carteira);
    
  }

  getCarteiraValue(){
    this.carteriraService.getCarteira().subscribe((carteira: any) =>{
      console.log(carteira);
      this.carteiraValue = carteira;
    });
  }

  ngOnInit(): void {
    this.options.get('type')?.setValue('0');
    this.getCarteiraValue();
  }

}
