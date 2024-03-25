import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { SteponeComponent } from './step/stepone/stepone.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,SteponeComponent,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Angular';
  title='';

}
