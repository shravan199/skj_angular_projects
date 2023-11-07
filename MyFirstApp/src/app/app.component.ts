import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
// import the fromEvent operator
import {
  fromEvent, Observable, of, forkJoin, from, filter, scheduled, delay, map, reduce, observable, Subscriber, interval, Subject, BehaviorSubject, observeOn,
  asyncScheduler, merge, take, concat, timer, lastValueFrom, ObservableLike, takeLast, pipe, toArray
} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { PropertyRead } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  count = 0;

  obs = from([{ name: 'shravan', age: 28 }, { name: 'jyoti', age: 23 }])

  filterd_obs = this.obs.pipe(filter(person => person.age < 25))

  observer = this.filterd_obs.subscribe((person) => {
    console.log(person)
  })

  seq_of_chars = from("shravan").pipe().
    subscribe(value => console.log(value));

  //emit result of promise
  promiseSource = from(new Promise(resolve => resolve('Hello World!')));
  //output: 'Hello World'
  subscribe = this.promiseSource.subscribe(val => console.log(val));


  //works on js collections
  map = new Map();
  val1 = this.map.set(1, 'Hi');
  val2 = this.map.set(2, 'Bye');

  mapSource = from(this.map);
  //output: [1, 'Hi'], [2, 'Bye']
  subscri = this.mapSource.subscribe(val => console.log(val));

  foo() {
    console.log('Hello');
    return 42;
  }

  @ViewChild("div1")
  div1: ElementRef = {} as ElementRef;

  @ViewChild("div2")
  div2: ElementRef = {} as ElementRef;



  constructor(private httpClient: HttpClient) { }

  x = this.foo(); // same as foo()
  y = this.foo(); // same as foo()


  obs2 = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
  });

  foo3 = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100); // "return" another value
    subscriber.next(200); // "return" yet another
  });

  obs_returnValueAsynchroniously = new Observable(subscriber => {
    console.log('Obs return values asynchroniously');
    subscriber.next(50);
    subscriber.next(100);
    subscriber.next(200);

    setTimeout(() => {
      subscriber.next(300); // happens asynchronously
    }, 2000);

  })


  //create Observable
  obs_creation = new Observable(function subscribe(subscriber) {
    let interval_id = setInterval(() => {
      subscriber.next(`Hi this is example of creation of observable using Observable constructor`)
    }, 2000)
  })

  //execution of Observable
  obs_execution = new Observable(function subscribe(subscriber) {
    try {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete()
    } catch (err) {
      subscriber.error(err);
    }
  })


  ngOnInit() {

    this.obs2.subscribe(value => {
      console.log(`Called using Observable ${value}`);
    });

    this.obs2.subscribe(value2 => {
      console.log(`Again: Called using Observable ${value2}`);
    });

    console.log('before');
    this.foo3.subscribe(x => {
      console.log(x);
    });
    console.log('after');


    console.log('before- obs_returnValueAsynchroniously');
    this.obs_returnValueAsynchroniously.subscribe(x => {
      console.log(x);
    });
    console.log('after- obs_returnValueAsynchroniously');

    //subscription -> Represents a disposable resource, such as the execution of an Observable
    let subscription = this.obs_creation.subscribe((data) => {
      console.log("Example-creation of Observable: " + data)
    })

    if (!subscription.closed) {
      console.log(`Status of subscription: ${subscription.closed}`);
      console.log(`Disposing the subscription started... at ${getLocaleDateTimeFormat}`);
      subscription.unsubscribe();
      console.log(`Disposing the subscription ended... at ${getLocaleDateTimeFormat}`);

    }

    // using pipe operator
    let subscription_pip_obs = of(1, 2, 3).pipe(map(x => x * x))
      .subscribe((value) => console.log(`Example of using pipe op: value : ${value}`));

    subscription_pip_obs.unsubscribe();

    //
    let subscription_interval_obs = interval(2000)
      .subscribe((value) => console.log(`Ceation of Obs using interval op: value : ${value}`));

    subscription_interval_obs.unsubscribe();

    //Example Subject
    console.log(" *** Example Subject **** ")
    let num_multicast_subject = new Subject<number>();

    //attaching 2 observrs to it
    let obsever_A = num_multicast_subject.subscribe({
      next: (v) => console.log(`observer_A: ${v}`)
    })

    let obsever_B = num_multicast_subject.subscribe({
      next: (v) => console.log(`observer_B: ${v}`)
    })

    // Action: calling number_subject and crossponding observers get called automatically
    num_multicast_subject.next(40);
    num_multicast_subject.next(44);

    let obsever_C = num_multicast_subject.subscribe({
      next: (v) => console.log(`observer_C: ${v}`)
    })

    // Behaviour subject
    console.log(" *** Example Behaviour Subject **** ")
    let behaviour_subject = new BehaviorSubject(0);

    let behv_subj_obs1 = behaviour_subject.subscribe(
      value => { console.log(`behv_subj_obs1 value: ${value}`) }
    )

    behaviour_subject.next(1);
    behaviour_subject.next(2);

    let behv_subj_obs2 = behaviour_subject.subscribe(
      value => { console.log(`behv_subj_obs2 value: ${value}`) }
    )

    behaviour_subject.next(3);

    //
    console.log(" *** Example Asynch Schedular **** ")
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(
      observeOn(asyncScheduler)
    );

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');


    console.log(" *** Example merge operator/function **** ")
    const clicks = fromEvent(document, 'click');
    const time = interval(1000);
    const clicksOrTimer = merge(clicks, time);
    //clicksOrTimer.subscribe(x => console.log(`Example merge operator/function: ${x}`));


    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const concurrent = 2; // the argument
    const merged = merge(timer1, timer2, timer3, concurrent);
    //merged.subscribe(x => console.log(x));


    // RxJS v6+
    console.log(" *** Example merge operator/function2 **** ")
    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 2 seconds
    const second = interval(2000);
    //emit every 1.5 seconds
    const third = interval(1500);
    //emit every 1 second
    const fourth = interval(1000);

    //emit outputs from one observable
    const example = concat(
      first.pipe(take(3), map(() => 'FIRST!')),
      second.pipe(take(3), map(() => 'SECOND!')),
      third.pipe(take(3), map(() => 'THIRD')),
      fourth.pipe(take(3), map(() => 'FOURTH'))
    );
    //output in case of Merge: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    //output in case of Concat: "FIRST", "SECOND!", "THIRD", "FOURTH"
    //const subscribe = example.subscribe(val => console.log(val));

    console.log(" *** Example forkjoin operator/function2 **** ")
    const fork_join_observable = forkJoin([
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(4000)
    ]);

    fork_join_observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });

    // Event listner example
    let htmlElement = document.getElementById('myBtn');

    htmlElement?.addEventListener('click', () => {
      this.count++;
    })

    htmlElement?.addEventListener('mouseover', () => {
      this.count++;
    })

    fromEvent(document, 'click').subscribe(
      () => console.log('Clicked!'));



    console.log('****** Angualr 13 Promise example ******');

    let promiseObj = new Promise((resolve, reject) => {
      resolve('Promise resolved'),
        reject("Promise rejected")
    })

    promiseObj.then((success) => {
      console.log('Promise resolved: Success')
    }).catch(error => {
      console.log('Promise rejected: Error')
    });

    let newsApiPromiseObj = this.fetchDataAsPromise().then((data) => {
      console.log(data['articles'])
    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });


    console.log('****** Angualr 13 Observable example ******');
    let newsApiObservableObj_subscription = this.fetchDataAsObservable()
    .pipe(map( x => x.articles), toArray())
      .subscribe({
        next: data => {
          console.log(data);
  
        },
        error: err => {
          console.log("Observable having error " + err);
        },
        complete: () => {
          console.log("Obserable call get completed")
        }
      })

  console.log(`***** Concat func Demo****`);

  let source1$ = of('a', 'b');
  let source2$ = of('x', 'y');

  let concat_optr_result = concat(source1$, source2$);

  concat_optr_result.subscribe( data => console.log (data))




  }// end of ngOnInit

  fetchDataAsPromise(): Promise<any> {
    let API_KEY = "62f079221d4a4c7e81e4e65cf7b5f591";
    return lastValueFrom(this.httpClient
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
      ))
  }

  fetchDataAsObservable(): Observable<any> {
    let API_KEY = "62f079221d4a4c7e81e4e65cf7b5f591";
    return this.httpClient
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
      )
  }

}