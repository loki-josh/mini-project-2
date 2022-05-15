import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authendication/login/login/login.component';
import { RegisterComponent } from './authendication/register/register/register.component';
import { HeaderComponent } from './dash-board/header/header.component';
import { FooterComponent } from './dash-board/footer/footer.component';
import { MainBodyComponent } from './dash-board/main-body/main-body.component'


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'main-body', component:MainBodyComponent},
  {
    path: 'main-body',
    loadChildren: () => import('./dash-board/main-body/main-body.module').then(m => m.MainBodyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const myRoutings = [
  LoginComponent,
   RegisterComponent,
   HeaderComponent,
   FooterComponent,
   MainBodyComponent
  ]
