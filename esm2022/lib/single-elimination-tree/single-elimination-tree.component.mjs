import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    static { this.ɵfac = function SingleEliminationTreeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SingleEliminationTreeComponent)(); }; }
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.final.matches.length > 1);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleEliminationTreeComponent, [{
        type: Component,
        args: [{ selector: 'ngtt-single-elimination-tree', template: "<div class=\"ngtt-se__container\">\r\n  <div class=\"ngtt-se__bracket-wrapper\">\r\n    <ng-container *ngFor=\"let winnersround of winnersBracket; let i = index\">\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <ng-container *ngFor=\"let match of winnersround.matches\">\r\n          <div class=\"ngtt-se__match-wrapper\">\r\n            <div class=\"ngtt-se__match-component-container\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: match}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container>\r\n      <div class=\"ngtt-se__round-wrapper\">\r\n        <div class=\"ngtt-se__match-wrapper\">\r\n          <div class=\"ngtt-se__finale-match-wrapper\">\r\n            <div class=\"ngtt-se__finale-component-container\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[0]}\"></ng-container>\r\n            </div>\r\n            <div class=\"ngtt-se__match-component-container\" *ngIf=\"final.matches.length > 1\">\r\n              <ng-container *ngTemplateOutlet=\"matchTemplate; context:{$implicit: final.matches[1]}\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { matchTemplate: [{
            type: Input
        }], tournament: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SingleEliminationTreeComponent, { className: "SingleEliminationTreeComponent", filePath: "lib\\single-elimination-tree\\single-elimination-tree.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdG91cm5hbWVudC10cmVlL3NyYy9saWIvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUvc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWdELE1BQU0sZUFBZSxDQUFDOzs7OztJQ09oRix3QkFBMkY7OztJQUhqRyw2QkFBeUQ7SUFFckQsQUFERiw4QkFBb0MsYUFDYztJQUM5QywrSEFBNEU7SUFFaEYsQUFERSxpQkFBTSxFQUNGOzs7OztJQUZhLGVBQWlDO0lBQUEsQUFBakMsdURBQWlDLGlFQUEwQjs7O0lBTHBGLDZCQUF5RTtJQUN2RSw4QkFBb0M7SUFDbEMsZ0hBQXlEO0lBTzNELGlCQUFNOzs7O0lBUDRCLGVBQXVCO0lBQXZCLGlEQUF1Qjs7O0lBY2pELHdCQUMwRjs7O0lBRzFGLHdCQUFzRzs7O0lBRHhHLDhCQUFpRjtJQUMvRSx1R0FBdUY7SUFDekYsaUJBQU07OztJQURXLGNBQWlDO0lBQUEsQUFBakMsdURBQWlDLGdGQUFxQzs7QURkbkcsTUFBTSxPQUFPLDhCQUE4QjtJQU96QztJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzsrSEF4QlUsOEJBQThCO29FQUE5Qiw4QkFBOEI7WUNQekMsQUFERiw4QkFBZ0MsYUFDUTtZQUNwQyxpR0FBeUU7WUFXekUsNkJBQWM7WUFJTixBQURGLEFBREYsQUFERiw4QkFBb0MsYUFDRSxhQUNTLGFBQ1E7WUFDL0MsaUdBQzJFO1lBQzdFLGlCQUFNO1lBQ04sK0VBQWlGO1lBS3ZGLEFBREUsQUFERSxpQkFBTSxFQUNGLEVBQ0Y7O1lBR1osQUFERSxpQkFBTSxFQUNGOztZQTNCcUMsZUFBbUI7WUFBbkIsNENBQW1CO1lBaUI3QyxlQUFpQztZQUFBLEFBQWpDLG9EQUFpQyw2RUFBcUM7WUFFMUIsY0FBOEI7WUFBOUIsbURBQThCOzs7aUZEYjlFLDhCQUE4QjtjQUwxQyxTQUFTOzJCQUNFLDhCQUE4QjtvQkFLL0IsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQUZLLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ3R0Um91bmQsIE5ndHRUb3VybmFtZW50fSBmcm9tICcuLi9kZWNsYXJhdGlvbnMvaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25ndHQtc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW5nbGUtZWxpbWluYXRpb24tdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2luZ2xlLWVsaW1pbmF0aW9uLXRyZWUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlRWxpbWluYXRpb25UcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG1hdGNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgdG91cm5hbWVudDogTmd0dFRvdXJuYW1lbnQ7XHJcblxyXG4gIHB1YmxpYyB3aW5uZXJzQnJhY2tldDogTmd0dFJvdW5kW107XHJcbiAgcHVibGljIGZpbmFsOiBOZ3R0Um91bmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndG91cm5hbWVudCcpICYmIGNoYW5nZXMudG91cm5hbWVudC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy53aW5uZXJzQnJhY2tldCA9IHRoaXMudG91cm5hbWVudC5yb3VuZHMuZmlsdGVyKHJvdW5kID0+IHtcclxuICAgICAgICByZXR1cm4gcm91bmQudHlwZSA9PT0gJ1dpbm5lcmJyYWNrZXQnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMud2lubmVyc0JyYWNrZXQpO1xyXG4gICAgdGhpcy5maW5hbCA9IHRoaXMudG91cm5hbWVudC5yb3VuZHMuZmlsdGVyKHJvdW5kID0+IHtcclxuICAgICAgcmV0dXJuIHJvdW5kLnR5cGUgPT09ICdGaW5hbCc7XHJcbiAgICB9KS5zaGlmdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5maW5hbCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibmd0dC1zZV9fY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5ndHQtc2VfX2JyYWNrZXQtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgd2lubmVyc3JvdW5kIG9mIHdpbm5lcnNCcmFja2V0OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19yb3VuZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWF0Y2ggb2Ygd2lubmVyc3JvdW5kLm1hdGNoZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19tYXRjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19tYXRjaC1jb21wb25lbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hdGNoVGVtcGxhdGU7IGNvbnRleHQ6eyRpbXBsaWNpdDogbWF0Y2h9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fcm91bmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZ3R0LXNlX19tYXRjaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fZmluYWxlLW1hdGNoLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ndHQtc2VfX2ZpbmFsZS1jb21wb25lbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXRjaFRlbXBsYXRlOyBjb250ZXh0OnskaW1wbGljaXQ6IGZpbmFsLm1hdGNoZXNbMF19XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd0dC1zZV9fbWF0Y2gtY29tcG9uZW50LWNvbnRhaW5lclwiICpuZ0lmPVwiZmluYWwubWF0Y2hlcy5sZW5ndGggPiAxXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hdGNoVGVtcGxhdGU7IGNvbnRleHQ6eyRpbXBsaWNpdDogZmluYWwubWF0Y2hlc1sxXX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==