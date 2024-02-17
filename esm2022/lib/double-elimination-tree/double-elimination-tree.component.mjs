import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DoubleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = a0 => ({ $implicit: a0 });
function DoubleEliminationTreeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 5);
    i0.ɵɵtemplate(3, DoubleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const match_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, match_r5));
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
    const match_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, match_r9));
} }
function DoubleEliminationTreeComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, DoubleEliminationTreeComponent_ng_container_8_ng_container_2_Template, 4, 4, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const losersround_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", losersround_r7.matches);
} }
export class DoubleEliminationTreeComponent {
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
    static { this.ɵfac = function DoubleEliminationTreeComponent_Factory(t) { return new (t || DoubleEliminationTreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleEliminationTreeComponent, selectors: [["ngtt-double-elimination-tree"]], inputs: { matchTemplate: "matchTemplate", tournament: "tournament" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 6, consts: [[1, "ngtt-de__container"], [1, "ngtt-de__winners-bracket-wrapper"], [4, "ngFor", "ngForOf"], [1, "ngtt-de__winners-round-wrapper"], [1, "ngtt-de__finale-match-wrapper"], [1, "ngtt-de__match-component-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngtt-de__losers-bracket-wrapper"], [1, "ngtt-de__winners-match-wrapper"], [1, "ngtt-de__losers-round-wrapper"], [1, "ngtt-de__losers-match-wrapper"]], template: function DoubleEliminationTreeComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("ngTemplateOutlet", ctx.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, ctx.final.matches[0]));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.losersBracket);
        } }, dependencies: [i1.NgForOf, i1.NgTemplateOutlet] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-double-elimination-tree', template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DoubleEliminationTreeComponent, { className: "DoubleEliminationTreeComponent", filePath: "lib\\double-elimination-tree\\double-elimination-tree.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXdDLE1BQU0sZUFBZSxDQUFDOzs7O0lDUXhFLHdCQUEyRjs7OztJQUhqRyw2QkFBeUQ7SUFDdkQsOEJBQTRDLGFBQUE7SUFFeEMsK0hBQTJGO0lBQzdGLGlCQUFNLEVBQUE7SUFFViwwQkFBZTs7OztJQUhNLGVBQWlDO0lBQWpDLHVEQUFpQyxpRUFBQTs7O0lBTjFELDZCQUEwRDtJQUV4RCw4QkFBNEM7SUFDMUMsZ0hBTWU7SUFDakIsaUJBQU07SUFDUiwwQkFBZTs7O0lBUnFCLGVBQXVCO0lBQXZCLGlEQUF1Qjs7O0lBWXJELHdCQUFzRzs7O0lBWWxHLHdCQUEyRjs7O0lBSGpHLDZCQUF3RDtJQUN0RCwrQkFBMkMsYUFBQTtJQUV2QywrSEFBMkY7SUFDN0YsaUJBQU0sRUFBQTtJQUVWLDBCQUFlOzs7O0lBSE0sZUFBaUM7SUFBakMsdURBQWlDLGlFQUFBOzs7SUFOMUQsNkJBQXdEO0lBRXRELDhCQUEyQztJQUN6QyxnSEFNZTtJQUNqQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFScUIsZUFBc0I7SUFBdEIsZ0RBQXNCOztBRGxCOUQsTUFBTSxPQUFPLDhCQUE4QjtJQVF6QztJQUNBLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzsrRkFyQlUsOEJBQThCO29FQUE5Qiw4QkFBOEI7WUNSM0MsOEJBQWdDLGFBQUE7WUFFNUIsaUdBV2U7WUFDZiw4QkFBNEMsYUFBQSxhQUFBO1lBR3RDLGlHQUFzRztZQUN4RyxpQkFBTSxFQUFBLEVBQUEsRUFBQTtZQUlaLDhCQUE2QztZQUMzQyxpR0FXZTtZQUNqQixpQkFBTSxFQUFBOztZQWpDbUMsZUFBaUI7WUFBakIsNENBQWlCO1lBZW5DLGVBQWlDO1lBQWpDLG9EQUFpQyw2RUFBQTtZQU1oQixlQUFnQjtZQUFoQiwyQ0FBZ0I7OztpRkRmN0MsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0UsOEJBQThCO29CQUsvQixhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSzs7a0ZBRkssOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ3R0Um91bmQsIE5ndHRUb3VybmFtZW50fSBmcm9tICcuLi9kZWNsYXJhdGlvbnMvaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25ndHQtZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kb3VibGUtZWxpbWluYXRpb24tdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG91YmxlRWxpbWluYXRpb25UcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtYXRjaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHRvdXJuYW1lbnQ6IE5ndHRUb3VybmFtZW50O1xyXG5cclxuICBwdWJsaWMgbG9zZXJzQnJhY2tldDogTmd0dFJvdW5kW107XHJcbiAgcHVibGljIHdpbm5lcnNCcmFja2V0OiBOZ3R0Um91bmRbXTtcclxuICBwdWJsaWMgZmluYWw6IE5ndHRSb3VuZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLmxvc2Vyc0JyYWNrZXQgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnTG9zZXJicmFja2V0JztcclxuICAgIH0pO1xyXG4gICAgdGhpcy53aW5uZXJzQnJhY2tldCA9IHRoaXMudG91cm5hbWVudC5yb3VuZHMuZmlsdGVyKHJvdW5kID0+IHtcclxuICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdXaW5uZXJicmFja2V0JztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maW5hbCA9IHRoaXMudG91cm5hbWVudC5yb3VuZHMuZmlsdGVyKHJvdW5kID0+IHtcclxuICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdGaW5hbCc7XHJcbiAgICB9KS5zaGlmdCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm5ndHQtZGVfX2NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZ3R0LWRlX193aW5uZXJzLWJyYWNrZXQtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgd2lubmVyc3JvdW5kIG9mIHdpbm5lcnNCcmFja2V0XCI+XHJcbiAgICAgIDwhLS0gICAgICB7e3dpbm5lcnNyb3VuZC5yb3VuZH19LS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LWRlX193aW5uZXJzLXJvdW5kLXdyYXBwZXJcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtYXRjaCBvZiB3aW5uZXJzcm91bmQubWF0Y2hlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX3dpbm5lcnMtbWF0Y2gtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fbWF0Y2gtY29tcG9uZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXRjaFRlbXBsYXRlOyBjb250ZXh0OnskaW1wbGljaXQ6IG1hdGNofVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX3dpbm5lcnMtcm91bmQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fZmluYWxlLW1hdGNoLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fbWF0Y2gtY29tcG9uZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hdGNoVGVtcGxhdGU7IGNvbnRleHQ6eyRpbXBsaWNpdDogZmluYWwubWF0Y2hlc1swXX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fbG9zZXJzLWJyYWNrZXQtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbG9zZXJzcm91bmQgb2YgbG9zZXJzQnJhY2tldFwiPlxyXG4gICAgICA8IS0tICAgICAge3tsb3NlcnNyb3VuZC5yb3VuZH19PGJyPi0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fbG9zZXJzLXJvdW5kLXdyYXBwZXJcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBsb3NlcnNyb3VuZC5tYXRjaGVzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fbG9zZXJzLW1hdGNoLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX21hdGNoLWNvbXBvbmVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWF0Y2hUZW1wbGF0ZTsgY29udGV4dDp7JGltcGxpY2l0OiBtYXRjaH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==