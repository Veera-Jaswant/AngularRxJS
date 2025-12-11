import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'buffer-operator',
        pathMatch: 'full'
    },
    {
        path: 'buffer-operator',
        loadComponent: () => import('../components/transformation-operators/buffer-operator/buffer-operator').then(m => m.BufferOperator),
        pathMatch: 'full'
    },
    {
        path: 'buffer-count-operator',
        loadComponent: () => import('../components/transformation-operators/buffer-count/buffer-count').then(m => m.BufferCount),
        pathMatch: 'full'
    }
];
