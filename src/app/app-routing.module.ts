import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AgileComponent } from '../app/agile/agile.component';
import { NyrComponent } from "../app/nyr/nyr.component";
import { OperationalComponent } from "../app/operational/operational.component";

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'agile', component: AgileComponent },
 { path: 'nyr', component: NyrComponent },
 { path: 'operational', component: OperationalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
