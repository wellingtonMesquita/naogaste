import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/models/gasto';
import { CarteiraService } from 'src/app/services/carteira.service';
import { GastoService } from 'src/app/services/gasto.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columns = ['Nome','Valor','Data','Status'];
  index = ['nome','valor','data','valor','status'];
  gasto = {} as Gasto;
  gastos: Gasto[] = [];
  carteiraValue = 0.0;
  gastoValue = 0.0;

  constructor(private gastoService: GastoService, private carteriraService: CarteiraService) { }

  ngOnInit(): void {
 
    this.getGastoValue();
    this.getGastos();
    
  }
  getGastos() {
    this.gastoService.getGastosLimited().subscribe((gastos: any) => {
      this.gastos = gastos;
     
    });
  }
  getGastoValue(){
    this.gastoService.getGasto().subscribe((gasto: any) => {
      this.gastoValue = gasto;
      this.getCarteiraValue();
    });
  }
  getCarteiraValue(){
    this.carteriraService.getCarteira().subscribe((carteira: any) =>{
      this.carteiraValue = (carteira - this.gastoValue);
    });
  }
  displayedColumns: string[] = ['nome','valor','data','status'];
  dataSource = this.gastos;
}
