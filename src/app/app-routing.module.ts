import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteiraCadastroComponent } from './carteira/carteira-cadastro/carteira-cadastro.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GastoCadastroComponent } from './gasto/gasto-cadastro/gasto-cadastro.component';
import { GastoListaComponent } from './gasto/gasto-lista/gasto-lista.component';

const routes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'carteira/cadastro',      component: CarteiraCadastroComponent },
  { path: 'gastos',      component: GastoListaComponent },
  { path: 'gastos/cadastro',      component: GastoCadastroComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
