import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JobMySuffixComponent } from './job-my-suffix.component';
import { JobMySuffixDetailComponent } from './job-my-suffix-detail.component';
import { JobMySuffixPopupComponent } from './job-my-suffix-dialog.component';
import { JobMySuffixDeletePopupComponent } from './job-my-suffix-delete-dialog.component';

export const jobRoute: Routes = [
    {
        path: 'job-my-suffix',
        component: JobMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'job-my-suffix/:id',
        component: JobMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const jobPopupRoute: Routes = [
    {
        path: 'job-my-suffix-new',
        component: JobMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'job-my-suffix/:id/edit',
        component: JobMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'job-my-suffix/:id/delete',
        component: JobMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Jobs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
