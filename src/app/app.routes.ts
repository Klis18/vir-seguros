import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./shared/pages/layout/layout.component").then(c => c.LayoutComponent),
        children:[
            {
                path:'home',
                loadComponent: () => import('./shared/pages/home/home.component').then(c => c.HomeComponent)
            },
            {
                path:'seguros',
                loadComponent: () => import("./insurances/pages/insurances/insurances.component").then(c => c.InsurancesComponent)
            },
            {
                path:'asegurados',
                loadComponent: () => import("./insured/pages/insured/insured.component").then(c => c.InsuredComponent)
            },
            {
                path:'asignacion-seguros-asegurados',
                loadComponent: () => import('./insured/pages/insurances-assignment/insurances-assignment.component').then(c => c.InsurancesAssignmentComponent)
            },
            {
                path:'**',
                redirectTo: 'home'
            }
        ]
    }
];
