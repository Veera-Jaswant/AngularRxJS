import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  imports: [],
  templateUrl: './custom-observable.html',
  styleUrl: './custom-observable.scss',
})
export class CustomObservable {

   observable$ = new Observable<number>((subscriber) => {
    let count = 0;
    const intervalId = setInterval(() => {
      subscriber.next(count++); 
      if (count > 5) {
        subscriber.error('Count exceeded limit');
        //subscriber.complete(); 
        clearInterval(intervalId); 
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); 
    };
  });

  ngOnInit() {
    this.observable$.subscribe({
      next: (value:number) => console.log('Emitted value:', value),
      error: (err:string) => console.error('Error occurred:', err),
      complete: () => console.log('Observable completed'),
    });
  }
  
}
