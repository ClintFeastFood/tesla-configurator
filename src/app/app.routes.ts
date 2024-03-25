import { Routes } from '@angular/router';
import { SteponeComponent } from './step/stepone/stepone.component';
import { SteptwoComponent } from './step/steptwo/steptwo.component';
import { StepthreeComponent } from './step/stepthree/stepthree.component';

export const routes: Routes = [
    {
        component:SteponeComponent,
        path:''
    },
    {
        component:SteptwoComponent,
        path:'steptwo'
    },
    {
        component:StepthreeComponent,
        path:'stepthree'
    }
];
