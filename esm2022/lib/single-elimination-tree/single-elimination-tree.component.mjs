import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SingleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function SingleEliminationTreeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 9);
    i0.ɵɵtemplate(3, SingleEliminationTreeComponent_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const match_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, match_r6));
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
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.matchTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r2.final.matches[1]));
} }
export class SingleEliminationTreeComponent {
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
    static { this.ɵfac = function SingleEliminationTreeComponent_Factory(t) { return new (t || SingleEliminationTreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SingleEliminationTreeComponent, selectors: [["ngtt-single-elimination-tree"]], inputs: { matchTemplate: "matchTemplate", tournament: "tournament" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 6, consts: [[1, "ngtt-se__container"], [1, "ngtt-se__bracket-wrapper"], [4, "ngFor", "ngForOf"], [1, "ngtt-se__round-wrapper"], [1, "ngtt-se__match-wrapper"], [1, "ngtt-se__finale-match-wrapper"], [1, "ngtt-se__finale-component-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ngtt-se__match-component-container", 4, "ngIf"], [1, "ngtt-se__match-component-container"]], template: function SingleEliminationTreeComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.final.matches.length > 1);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-single-elimination-tree', template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return []; }, { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWdELE1BQU0sZUFBZSxDQUFDOzs7O0lDT2hGLHdCQUEyRjs7OztJQUhqRyw2QkFBeUQ7SUFDdkQsOEJBQW9DLGFBQUE7SUFFaEMsK0hBQTJGO0lBQzdGLGlCQUFNLEVBQUE7SUFFViwwQkFBZTs7OztJQUhNLGVBQWlDO0lBQWpDLHVEQUFpQyxpRUFBQTs7O0lBTDFELDZCQUF5RTtJQUN2RSw4QkFBb0M7SUFDbEMsZ0hBTWU7SUFDakIsaUJBQU07SUFDUiwwQkFBZTs7O0lBUnFCLGVBQXVCO0lBQXZCLGlEQUF1Qjs7O0lBY2pELHdCQUMwRjs7O0lBRzFGLHdCQUFzRzs7O0lBRHhHLDhCQUFpRjtJQUMvRSx1R0FBc0c7SUFDeEcsaUJBQU07OztJQURXLGVBQWlDO0lBQWpDLHVEQUFpQyxnRkFBQTs7QURkOUQsTUFBTSxPQUFPLDhCQUE4QjtJQU96QztJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOytGQXhCVSw4QkFBOEI7b0VBQTlCLDhCQUE4QjtZQ1IzQyw4QkFBZ0MsYUFBQTtZQUU1QixpR0FVZTtZQUNmLDZCQUFjO1lBQ1osOEJBQW9DLGFBQUEsYUFBQSxhQUFBO1lBSTVCLGlHQUMwRjtZQUM1RixpQkFBTTtZQUNOLCtFQUVNO1lBQ1IsaUJBQU0sRUFBQSxFQUFBO1lBR1osMEJBQWU7WUFDakIsaUJBQU0sRUFBQTs7WUExQm1DLGVBQW1CO1lBQW5CLDRDQUFtQjtZQWlCN0MsZUFBaUM7WUFBakMsb0RBQWlDLDZFQUFBO1lBRVcsZUFBOEI7WUFBOUIsbURBQThCOzs7dUZEYjlFLDhCQUE4QjtjQUwxQyxTQUFTOzJCQUNFLDhCQUE4QjtzQ0FLL0IsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Tmd0dFJvdW5kLCBOZ3R0VG91cm5hbWVudH0gZnJvbSAnLi4vZGVjbGFyYXRpb25zL2ludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3R0LXNpbmdsZS1lbGltaW5hdGlvbi10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpbmdsZS1lbGltaW5hdGlvbi10cmVlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZUVsaW1pbmF0aW9uVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtYXRjaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHRvdXJuYW1lbnQ6IE5ndHRUb3VybmFtZW50O1xyXG5cclxuICBwdWJsaWMgd2lubmVyc0JyYWNrZXQ6IE5ndHRSb3VuZFtdO1xyXG4gIHB1YmxpYyBmaW5hbDogTmd0dFJvdW5kO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3RvdXJuYW1lbnQnKSAmJiBjaGFuZ2VzLnRvdXJuYW1lbnQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMud2lubmVyc0JyYWNrZXQgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdXaW5uZXJicmFja2V0JztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcnNCcmFja2V0KTtcclxuICAgIHRoaXMuZmluYWwgPSB0aGlzLnRvdXJuYW1lbnQucm91bmRzLmZpbHRlcihyb3VuZCA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZC50eXBlID09PSAnRmluYWwnO1xyXG4gICAgfSkuc2hpZnQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmluYWwpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm5ndHQtc2VfX2NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19icmFja2V0LXdyYXBwZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHdpbm5lcnNyb3VuZCBvZiB3aW5uZXJzQnJhY2tldDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fcm91bmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1hdGNoIG9mIHdpbm5lcnNyb3VuZC5tYXRjaGVzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fbWF0Y2gtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fbWF0Y2gtY29tcG9uZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXRjaFRlbXBsYXRlOyBjb250ZXh0OnskaW1wbGljaXQ6IG1hdGNofVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtc2VfX3JvdW5kLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fbWF0Y2gtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtc2VfX2ZpbmFsZS1tYXRjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19maW5hbGUtY29tcG9uZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwibWF0Y2hUZW1wbGF0ZTsgY29udGV4dDp7JGltcGxpY2l0OiBmaW5hbC5tYXRjaGVzWzBdfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtc2VfX21hdGNoLWNvbXBvbmVudC1jb250YWluZXJcIiAqbmdJZj1cImZpbmFsLm1hdGNoZXMubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXRjaFRlbXBsYXRlOyBjb250ZXh0OnskaW1wbGljaXQ6IGZpbmFsLm1hdGNoZXNbMV19XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=