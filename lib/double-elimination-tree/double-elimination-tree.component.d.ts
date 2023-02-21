import { OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgttRound, NgttTournament } from '../declarations/interfaces';
import * as i0 from "@angular/core";
export declare class DoubleEliminationTreeComponent implements OnChanges {
    matchTemplate: TemplateRef<any>;
    tournament: NgttTournament;
    losersBracket: NgttRound[];
    winnersBracket: NgttRound[];
    final: NgttRound;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoubleEliminationTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoubleEliminationTreeComponent, "ngtt-double-elimination-tree", never, { "matchTemplate": "matchTemplate"; "tournament": "tournament"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=double-elimination-tree.component.d.ts.map