import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Gasto } from 'src/app/models/gasto';
import { Page } from 'src/app/models/page';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gasto-lista',
  templateUrl: './gasto-lista.component.html',
  styleUrls: ['./gasto-lista.component.scss']
})
export class GastoListaComponent implements OnInit {

  pageOfItems: Array<Gasto> = [];
  dataSource!: MatTableDataSource<Gasto>;  
  displayedColumns: string[] = ['nome','valor','data','status'];
  totalDeElementos = 0;
 

  constructor(private service: GastoService) {
    this.service.getGastos(0,10).subscribe(data  =>{  
      this.totalDeElementos = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
       
 
    });
   }
  ngOnInit() {
  
  }
  onChangePage(event:any) {
     this.service.getGastos(event.pageIndex,event.pageSize).subscribe(data  =>{  
       console.log(event);
       this.dataSource = new MatTableDataSource(data.content);
       
 
     });
}
  applyFilter(filterValue: string) {  
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  }  
}