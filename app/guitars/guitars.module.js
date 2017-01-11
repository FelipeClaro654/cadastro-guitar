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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var guitars_list_component_1 = require("./list/guitars-list.component");
var guitar_service_1 = require("./guitar.service");
var GuitarsModule = (function () {
    function GuitarsModule() {
    }
    return GuitarsModule;
}());
GuitarsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [guitars_list_component_1.GuitarsListComponent],
        declarations: [guitars_list_component_1.GuitarsListComponent],
        providers: [guitar_service_1.GuitarService],
    }),
    __metadata("design:paramtypes", [])
], GuitarsModule);
exports.GuitarsModule = GuitarsModule;
//# sourceMappingURL=guitars.module.js.map