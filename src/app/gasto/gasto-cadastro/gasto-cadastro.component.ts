import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gasto-cadastro',
  templateUrl: './gasto-cadastro.component.html',
  styleUrls: ['./gasto-cadastro.component.scss']
})
export class GastoCadastroComponent implements OnInit {

  gastoForm: FormGroup;
  nome = new FormControl('', [Validators.required]);
  data = new FormControl('', [Validators.required])
  valor = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required])

  getErrorMessage() {
    if (this.nome.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.data.hasError('required')){
      return 'You must enter a value';
    }

    return '';
   
  }

  constructor(fb: FormBuilder, private gastoService: GastoService, private router: Router) {
    this.gastoForm = fb.group({
      nome: this.nome,
      data: this.data,
      valor: this.valor,
      status: this.status
    });
  }

  saveGastos(gasto:any){
    this.gastoService.saveGasto(gasto).subscribe(()=>{
      this.router.navigateByUrl('/gastos')
      console.log("sucesso");
    })
  }

  submit(){
    let gasto = { 
      nome: "",
      data: '',
      valor: 0,
      status: 0
    };
      gasto.nome = this.gastoForm.get('nome')?.value;
      gasto.data  = this.gastoForm.get('data')?.value;
      gasto.status  = this.gastoForm.get('status')?.value;
      gasto.valor  = this.gastoForm.get('valor')?.value;
 this.saveGastos(gasto);
  }
  ngOnInit(): void {
    this.gastoForm.get('status')?.setValue('false');
  }

}
