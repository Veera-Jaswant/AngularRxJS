import { AfterViewInit, Component, signal } from '@angular/core';
import { buffer, concatMap, delay, from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  imports: [],
  templateUrl: './buffer-operator.html',
  styleUrl: './buffer-operator.scss',
})
export class BufferOperator implements AfterViewInit {

  showDataObservable$!: Observable<Event>;
  bufferValues = signal<number[]>([]);
  myarray = Array.from({ length: 25 }, (_, i) => i + 1);
  disableStartIntervalButton = signal<boolean>(false);

  ngAfterViewInit(): void {
    this.showDataObservable$ = fromEvent(document.getElementById('showBufferValues')!, 'click');
  }


  startInterval() {
    this.disableStartIntervalButton.set(true)
    if (this.bufferValues().length > 0) {
      this.bufferValues.set([]);
    }

    from(this.myarray)
      .pipe(
        concatMap(item => of(item).pipe(delay(1000))),
        buffer(this.showDataObservable$))
      .subscribe({
        next: (value: number[]) => {
          this.bufferValues.set(value);
        },
        error: (err: any) => console.log(err),
        complete: () => this.disableStartIntervalButton.set(false)
      }
      );
  }
}
