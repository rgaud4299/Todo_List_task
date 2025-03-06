"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var header_component_1 = require("./main/header/header.component");
var footer_component_1 = require("./main/footer/footer.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [router_1.RouterOutlet, header_component_1.HeaderComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
