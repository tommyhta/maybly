import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YesnoComponent } from './yesno/yesno.component';
import { SelfinputComponent } from './selfinput/selfinput.component';
import { YelppoweredComponent } from './yelppowered/yelppowered.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path: 'yesno', component: YesnoComponent},
    {path: 'input', component: SelfinputComponent},
    {path: 'restaurants', component: YelppoweredComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
