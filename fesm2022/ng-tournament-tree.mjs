import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

const _c0$1 = a0 => ({ $implicit: a0 });
function DoubleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DoubleEliminationTreeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 5);
    i0.ɵɵtemplate(3, DoubleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const match_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0$1, match_r1));
} }
function DoubleEliminationTreeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, DoubleEliminationTreeComponent_ng_container_2_ng_container_2_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const winnersround_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", winnersround_r3.matches);
} }
function DoubleEliminationTreeComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DoubleEliminationTreeComponent_ng_container_8_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DoubleEliminationTreeComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "div", 5);
    i0.ɵɵtemplate(3, DoubleEliminationTreeComponent_ng_container_8_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const match_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0$1, match_r4));
} }
function DoubleEliminationTreeComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, DoubleEliminationTreeComponent_ng_container_8_ng_container_2_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const losersround_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", losersround_r5.matches);
} }
class DoubleEliminationTreeComponent {
    constructor() {
    }
    ngOnChanges(changes) {
        this.losersBracket = this.tournament.rounds.filter(round => {
            return round.type === 'Loserbracket';
        });
        this.winnersBracket = this.tournament.rounds.filter(round => {
            return round.type === 'Winnerbracket';
        });
        this.final = this.tournament.rounds.filter(round => {
            return round.type === 'Final';
        }).shift();
    }
    static { this.ɵfac = function DoubleEliminationTreeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DoubleEliminationTreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleEliminationTreeComponent, selectors: [["ngtt-double-elimination-tree"]], inputs: { matchTemplate: "matchTemplate", tournament: "tournament" }, standalone: false, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 6, consts: [[1, "ngtt-de__container"], [1, "ngtt-de__winners-bracket-wrapper"], [4, "ngFor", "ngForOf"], [1, "ngtt-de__winners-round-wrapper"], [1, "ngtt-de__finale-match-wrapper"], [1, "ngtt-de__match-component-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngtt-de__losers-bracket-wrapper"], [1, "ngtt-de__winners-match-wrapper"], [1, "ngtt-de__losers-round-wrapper"], [1, "ngtt-de__losers-match-wrapper"]], template: function DoubleEliminationTreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, DoubleEliminationTreeComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵtemplate(6, DoubleEliminationTreeComponent_ng_container_6_Template, 1, 0, "ng-container", 6);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵtemplate(8, DoubleEliminationTreeComponent_ng_container_8_Template, 3, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.winnersBracket);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0$1, ctx.final.matches[0]));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.losersBracket);
        } }, dependencies: [i1.NgForOf, i1.NgTemplateOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-double-elimination-tree', standalone: false, template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DoubleEliminationTreeComponent, { className: "DoubleEliminationTreeComponent", filePath: "lib/double-elimination-tree/double-elimination-tree.component.ts", lineNumber: 10 }); })();

const components$1 = [DoubleEliminationTreeComponent];
class NgttDoubleEliminationTreeModule {
    static { this.ɵfac = function NgttDoubleEliminationTreeModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NgttDoubleEliminationTreeModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgttDoubleEliminationTreeModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgttDoubleEliminationTreeModule, [{
        type: NgModule,
        args: [{
                declarations: components$1,
                imports: [
                    CommonModule
                ],
                exports: components$1
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgttDoubleEliminationTreeModule, { declarations: [DoubleEliminationTreeComponent], imports: [CommonModule], exports: [DoubleEliminationTreeComponent] }); })();

const _c0 = a0 => ({ $implicit: a0 });
function SingleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SingleEliminationTreeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 9);
    i0.ɵɵtemplate(3, SingleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const match_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, match_r1));
} }
function SingleEliminationTreeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, SingleEliminationTreeComponent_ng_container_2_ng_container_2_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const winnersround_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", winnersround_r3.matches);
} }
function SingleEliminationTreeComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SingleEliminationTreeComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SingleEliminationTreeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, SingleEliminationTreeComponent_div_9_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r1.final.matches[1]));
} }
class SingleEliminationTreeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
            this.winnersBracket = this.tournament.rounds.filter(round => {
                return round.type === 'Winnerbracket';
            });
        }
        console.log(this.winnersBracket);
        this.final = this.tournament.rounds.filter(round => {
            return round.type === 'Final';
        }).shift();
        console.log(this.final);
    }
    static { this.ɵfac = function SingleEliminationTreeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SingleEliminationTreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SingleEliminationTreeComponent, selectors: [["ngtt-single-elimination-tree"]], inputs: { matchTemplate: "matchTemplate", tournament: "tournament" }, standalone: false, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 6, consts: [[1, "ngtt-se__container"], [1, "ngtt-se__bracket-wrapper"], [4, "ngFor", "ngForOf"], [1, "ngtt-se__round-wrapper"], [1, "ngtt-se__match-wrapper"], [1, "ngtt-se__finale-match-wrapper"], [1, "ngtt-se__finale-component-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ngtt-se__match-component-container", 4, "ngIf"], [1, "ngtt-se__match-component-container"]], template: function SingleEliminationTreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, SingleEliminationTreeComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
            i0.ɵɵelementContainerStart(3);
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
            i0.ɵɵtemplate(8, SingleEliminationTreeComponent_ng_container_8_Template, 1, 0, "ng-container", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SingleEliminationTreeComponent_div_9_Template, 2, 4, "div", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.winnersBracket);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, ctx.final.matches[0]));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.final.matches.length > 1);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-single-elimination-tree', standalone: false, template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SingleEliminationTreeComponent, { className: "SingleEliminationTreeComponent", filePath: "lib/single-elimination-tree/single-elimination-tree.component.ts", lineNumber: 10 }); })();

const components = [SingleEliminationTreeComponent];
class NgttSingleEliminationTreeModule {
    static { this.ɵfac = function NgttSingleEliminationTreeModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NgttSingleEliminationTreeModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgttSingleEliminationTreeModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgttSingleEliminationTreeModule, [{
        type: NgModule,
        args: [{
                declarations: components,
                imports: [
                    CommonModule
                ],
                exports: components
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgttSingleEliminationTreeModule, { declarations: [SingleEliminationTreeComponent], imports: [CommonModule], exports: [SingleEliminationTreeComponent] }); })();

/*
 * Public API Surface of ng-tournament-tree
 */
// export * from './lib/ng-tournament-tree.module';

/**
 * Generated bundle index. Do not edit.
 */

export { DoubleEliminationTreeComponent, NgttDoubleEliminationTreeModule, NgttSingleEliminationTreeModule, SingleEliminationTreeComponent };
//# sourceMappingURL=ng-tournament-tree.mjs.map
