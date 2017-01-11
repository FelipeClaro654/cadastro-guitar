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
var guitar_service_1 = require("./../guitar.service");
var GuitarsListComponent = (function () {
    function GuitarsListComponent(guitarService) {
        this.guitarService = guitarService;
        this.guitars = [];
    }
    GuitarsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.guitarService.getGuitars()
            .then(function (guitars) {
            _this.guitars = guitars;
        });
    };
    return GuitarsListComponent;
}());
GuitarsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'guitars-list',
        templateUrl: 'guitars-list.component.html'
    }),
    __metadata("design:paramtypes", [guitar_service_1.GuitarService])
], GuitarsListComponent);
exports.GuitarsListComponent = GuitarsListComponent;
//# sourceMappingURL=guitars-list.component.js.map