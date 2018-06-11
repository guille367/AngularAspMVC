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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var message_service_1 = require("./message.service");
var http_1 = require("@angular/common/http");
var HeroService = /** @class */ (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes';
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        this.log('heroes pushed!');
        return this.http.get(this.heroesUrl)
            .pipe(operators_1.tap(function (_) { return _this.log('fetched heroes'); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.getHeroById = function (id) {
        var _this = this;
        return this.http.get(this.heroesUrl + "/" + id)
            .pipe(operators_1.tap(function (_) { return _this.log("fetched hero id = " + id); }), operators_1.catchError(this.handleError('getHeroById')));
    };
    HeroService.prototype.getPrueba = function () {
        var params = { page: 1, pageSize: 10, pageCount: 0 };
        var httpParams = new http_1.HttpParams()
            .set('filtro.page', '12')
            .set('filtro.pageCount', '122')
            .set('FAFA', '122');
        return this.http.get('/Home/GetData', { params: httpParams });
    };
    HeroService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            message_service_1.MessageService])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map