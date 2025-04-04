import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosCondicionesComponent } from './screens/terminos-condiciones/terminos-condiciones.component';
import { HoraCorrerComponent } from './screens/hora-correr/hora-correr.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'politica-privacidad', component: PoliticaPrivacidadScreenComponent, pathMatch: 'full' },
  { path: 'terminos-condiciones', component: TerminosCondicionesComponent, pathMatch: 'full' },
  { path: '¡HORA CORRER', component: HoraCorrerComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
