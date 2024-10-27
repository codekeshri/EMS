import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {

                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
        ]
    },


];
