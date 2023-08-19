import { OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgttRound, NgttTournament } from '../declarations/interfaces';
import * as i0 from "@angular/core";
export declare class SingleEliminationTreeComponent implements OnInit, OnChanges {
    matchTemplate: TemplateRef<any>;
    tournament: NgttTournament;
    winnersBracket: NgttRound[];
    final: NgttRound;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingleEliminationTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SingleEliminationTreeComponent, "ngtt-single-elimination-tree", never, { "matchTemplate": { "alias": "matchTemplate"; "required": false; }; "tournament": { "alias": "tournament"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=single-elimination-tree.component.d.ts.map