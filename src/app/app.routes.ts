import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaragemComponent } from './garagem/garagem.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { CadastroCarComponent } from './cadastroCar/cadastro-car.component';
import { AjustesComponent } from './ajustes/ajustes.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	// primary routes (can be accessed via /login or /register)
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	// modal routes rendered into named outlets (used by Home buttons)
	{ path: 'modal-login', component: LoginComponent, outlet: 'login' },
	{ path: 'modal-register', component: RegisterComponent, outlet: 'register' },
	{ path: 'inicio', component: InicioComponent },
	{ path: 'garagem', component: GaragemComponent },
	{ path: 'cadastro-car', component: CadastroCarComponent },
	{ path: 'ajustes', component: AjustesComponent },
	{ path: 'visualizacao/:id', component: VisualizacaoComponent }
];
