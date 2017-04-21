"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(_appservice) {
        this._appservice = _appservice;
        console.clear();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("before reading");
        this._appservice.getQuestions()
            .subscribe(function (response) { return _this.question = response; });
        console.log("after reading");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello Data is <br>\n  FeedbackForm Name :- {{question?.feedback_Name}}\n  <br>\n  Date :- {{question?.Date}}\n  <br>\n  Questions :-\n  <div *ngFor = \"let item of question?.questiondata\">\n   {{item}}\n  </div>\n\n  </h1>",
        providers: [app_service_1.HTTPCallService],
        inputs: ['value', 'question']
    }),
    __metadata("design:paramtypes", [app_service_1.HTTPCallService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map