import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperatorsContainer } from '../components/operators-container/operators-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OperatorsContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
