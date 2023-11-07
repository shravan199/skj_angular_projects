import { of, forkJoin, concat } from 'rxjs';

let sum = 0;

of(1, 2, 3).subscribe({
    next(value) {
        console.log(`Adding : ${value}`);
        sum = sum + value;
    },
    complete() {
        console.log(`Sum is: ${sum}`);
    }
});




let list1 = of(2, 3, 4, 5, 6);
let list2 = of(4, 9, 16, 25, 36)
let final_val = forkJoin([list1, list2]);
final_val.subscribe(x => console.log(x));

let obs1 = of(2, 3, 4, 5, 6);
let obs2 = of(4, 9, 16, 25, 36);

let obs = forkJoin([obs1, obs2])
obs.subscribe( (lastvalue) => {
    console.log(lastvalue)
})



