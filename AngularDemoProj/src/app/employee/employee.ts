export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    // To make a property optional use a ?
    // A class that implements this interface need
    // not provide implementation for this property
    department?: string;

    //computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    // All the interface mandatory properties are defined  
    public code: string;
    public name: string;
    public gender: string;
    public annualSalary: number;
    public dateOfBirth: string;

    // The above class properties are then initialized
    // using the constructor parameters. To do something
    // like this, TypeScript has a shorthand syntax which
    // reduces the amount of code we have to write
    constructor(code: string, name: string, gender: string,
        annualSalary: number, dateOfBirth: string) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
    }

    // Implementation of the interface method
    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}

export class Employee2 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//We can rewrite the above code using shorthand syntax as shown below.
// In both the cases the generated JavaScript code is the same.

export class Employee3 {
    constructor(private firstName: string, private lastName: string) {
    }
}

export class Employee4 implements IEmployee {
    constructor(public code: string, public name: string,
        public gender: string, public annualSalary: number,
        public dateOfBirth: string) { }
}