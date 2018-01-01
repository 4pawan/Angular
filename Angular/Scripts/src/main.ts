import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

import "zone.js";

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));



import { Greeter } from './greeter';
let greeter: Greeter = new Greeter('Cecil');
let greeting: string = greeter.greet();

console.log(greeting);

