import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./shared/pages/layout/layout.component").then(c => c.LayoutComponent),
        children:[
            {
                path:'seguros',
                loadComponent: () => import("./insurances/pages/insurances/insurances.component").then(c => c.InsurancesComponent)
            },
            {
                path:'**',
                redirectTo: 'seguros'
            }
        ]
    }
];
