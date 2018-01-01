"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
var greeter_1 = require("./greeter");
var greeter = new greeter_1.Greeter('Cecil');
var greeting = greeter.greet();
console.log(greeting);
//# sourceMappingURL=main.js.map