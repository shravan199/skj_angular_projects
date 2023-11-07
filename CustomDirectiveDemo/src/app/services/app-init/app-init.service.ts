import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {

  constructor() { }

  Init(): Promise<void>{
    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.Init() called.");

      // Initiliaze the custom stuff here

      setTimeout(() => {
        console.log("AppInitService completed.");
        resolve();
      }, 0);

    });
  }
}
