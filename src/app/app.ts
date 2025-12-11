import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('AngularRxJS');

  postsArray = [
    { title: 'Post 1', content: 'Content of Post 1' },
    { title: 'Post 2', content: 'Content of Post 2' },
    { title: 'Post 3', content: 'Content of Post 3' } 
  ]

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 2000);
  });


  postsArrayObservable$ = from(this.postsArray);
  promiseObservable$ = from(this.promise);

  ngOnInit() {
    console.log('App component initialized');
    this.postsArrayObservable$.subscribe({
      next: post => console.log('Post:', post),
      error: err => console.error('Error:', err),
      complete: () => console.log('All posts emitted')
    })

    this.promiseObservable$.subscribe({
      next: result => console.log('Promise Result:', result),
      error: err => console.error('Promise Error:', err),
      complete: () => console.log('Promise Observable completed')
    })
  }

  ngAfterViewInit() {
    const buttonElement = document.getElementById('button');
    console.log('Button Element:', buttonElement);
    fromEvent(buttonElement!, 'click').subscribe({
      next: event => console.log('Button clicked:', event),
      error: err => console.error('Error:', err),
      complete: () => console.log('Button click observable completed')
    });
  }
}
