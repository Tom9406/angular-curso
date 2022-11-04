import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';



const routes: Routes = [
  {path:'navbar', component: NavbarComponent},
  {path:'header', component: HeaderComponent},
  {path:'', pathMatch:'full', redirectTo:'navbar'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
