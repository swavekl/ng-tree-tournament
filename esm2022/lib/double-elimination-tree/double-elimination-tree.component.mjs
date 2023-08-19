import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DoubleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-double-elimination-tree', template: "<div class=\"ngtt-de__container\">\r\n  <div class=\"ngtt-de__winners-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket\">\r\n      <!--      {{winnersround.round}}-->\r\n      <div class=\"ngtt-de__winners-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-de__winners-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"ngtt-de__winners-round-wrapper\">\r\n      <div class=\"ngtt-de__finale-match-wrapper\">\r\n        <div class=\"ngtt-de__match-component-container\">\r\n          <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ngtt-de__losers-bracket-wrapper\">\r\n    <ng-container *ngFor=\"let losersround of losersBracket\">\r\n      <!--      {{losersround.round}}<br>-->\r\n      <div class=\"ngtt-de__losers-round-wrapper\">\r\n        <ng-container *ngFor=\"let match of losersround.matches\">\r\n          <div class=\"ngtt-de__losers-match-wrapper\">\r\n            <div class=\"ngtt-de__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return []; }, { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUvZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXdDLE1BQU0sZUFBZSxDQUFDOzs7O0lDUXhFLHdCQUEyRjs7OztJQUhqRyw2QkFBeUQ7SUFDdkQsOEJBQTRDLGFBQUE7SUFFeEMsK0hBQTJGO0lBQzdGLGlCQUFNLEVBQUE7SUFFViwwQkFBZTs7OztJQUhNLGVBQWlDO0lBQWpDLHVEQUFpQyxpRUFBQTs7O0lBTjFELDZCQUEwRDtJQUV4RCw4QkFBNEM7SUFDMUMsZ0hBTWU7SUFDakIsaUJBQU07SUFDUiwwQkFBZTs7O0lBUnFCLGVBQXVCO0lBQXZCLGlEQUF1Qjs7O0lBWXJELHdCQUFzRzs7O0lBWWxHLHdCQUEyRjs7O0lBSGpHLDZCQUF3RDtJQUN0RCwrQkFBMkMsYUFBQTtJQUV2QywrSEFBMkY7SUFDN0YsaUJBQU0sRUFBQTtJQUVWLDBCQUFlOzs7O0lBSE0sZUFBaUM7SUFBakMsdURBQWlDLGlFQUFBOzs7SUFOMUQsNkJBQXdEO0lBRXRELDhCQUEyQztJQUN6QyxnSEFNZTtJQUNqQixpQkFBTTtJQUNSLDBCQUFlOzs7SUFScUIsZUFBc0I7SUFBdEIsZ0RBQXNCOztBRGxCOUQsTUFBTSxPQUFPLDhCQUE4QjtJQVF6QztJQUNBLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQzsrRkFyQlUsOEJBQThCO29FQUE5Qiw4QkFBOEI7WUNSM0MsOEJBQWdDLGFBQUE7WUFFNUIsaUdBV2U7WUFDZiw4QkFBNEMsYUFBQSxhQUFBO1lBR3RDLGlHQUFzRztZQUN4RyxpQkFBTSxFQUFBLEVBQUEsRUFBQTtZQUlaLDhCQUE2QztZQUMzQyxpR0FXZTtZQUNqQixpQkFBTSxFQUFBOztZQWpDbUMsZUFBaUI7WUFBakIsNENBQWlCO1lBZW5DLGVBQWlDO1lBQWpDLG9EQUFpQyw2RUFBQTtZQU1oQixlQUFnQjtZQUFoQiwyQ0FBZ0I7Ozt1RkRmN0MsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0UsOEJBQThCO3NDQUsvQixhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Tmd0dFJvdW5kLCBOZ3R0VG91cm5hbWVudH0gZnJvbSAnLi4vZGVjbGFyYXRpb25zL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3R0LWRvdWJsZS1lbGltaW5hdGlvbi10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG91YmxlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvdWJsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvdWJsZUVsaW1pbmF0aW9uVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbWF0Y2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSB0b3VybmFtZW50OiBOZ3R0VG91cm5hbWVudDtcclxuXHJcbiAgcHVibGljIGxvc2Vyc0JyYWNrZXQ6IE5ndHRSb3VuZFtdO1xyXG4gIHB1YmxpYyB3aW5uZXJzQnJhY2tldDogTmd0dFJvdW5kW107XHJcbiAgcHVibGljIGZpbmFsOiBOZ3R0Um91bmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy5sb3NlcnNCcmFja2V0ID0gdGhpcy50b3VybmFtZW50LnJvdW5kcy5maWx0ZXIocm91bmQgPT4ge1xyXG4gICAgICByZXR1cm4gcm91bmQudHlwZSA9PT0gJ0xvc2VyYnJhY2tldCc7XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2lubmVyc0JyYWNrZXQgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnV2lubmVyYnJhY2tldCc7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZmluYWwgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnRmluYWwnO1xyXG4gICAgfSkuc2hpZnQoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuZ3R0LWRlX19jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fd2lubmVycy1icmFja2V0LXdyYXBwZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHdpbm5lcnNyb3VuZCBvZiB3aW5uZXJzQnJhY2tldFwiPlxyXG4gICAgICA8IS0tICAgICAge3t3aW5uZXJzcm91bmQucm91bmR9fS0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd0dC1kZV9fd2lubmVycy1yb3VuZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWF0Y2ggb2Ygd2lubmVyc3JvdW5kLm1hdGNoZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LWRlX193aW5uZXJzLW1hdGNoLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX21hdGNoLWNvbXBvbmVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWF0Y2hUZW1wbGF0ZTsgY29udGV4dDp7JGltcGxpY2l0OiBtYXRjaH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxkaXYgY2xhc3M9XCJuZ3R0LWRlX193aW5uZXJzLXJvdW5kLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX2ZpbmFsZS1tYXRjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX21hdGNoLWNvbXBvbmVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXRjaFRlbXBsYXRlOyBjb250ZXh0OnskaW1wbGljaXQ6IGZpbmFsLm1hdGNoZXNbMF19XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX2xvc2Vycy1icmFja2V0LXdyYXBwZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxvc2Vyc3JvdW5kIG9mIGxvc2Vyc0JyYWNrZXRcIj5cclxuICAgICAgPCEtLSAgICAgIHt7bG9zZXJzcm91bmQucm91bmR9fTxicj4tLT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX2xvc2Vycy1yb3VuZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbG9zZXJzcm91bmQubWF0Y2hlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtZGVfX2xvc2Vycy1tYXRjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LWRlX19tYXRjaC1jb21wb25lbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hdGNoVGVtcGxhdGU7IGNvbnRleHQ6eyRpbXBsaWNpdDogbWF0Y2h9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=