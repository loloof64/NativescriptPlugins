import { Component, NgZone } from '@angular/core';
import { DemoSharedChessOexScanner } from '@demo/shared';
import {} from '@loloof64/chess-oex-scanner';

@Component({
	selector: 'demo-chess-oex-scanner',
	templateUrl: 'chess-oex-scanner.component.html',
})
export class ChessOexScannerComponent {
	demoShared: DemoSharedChessOexScanner;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedChessOexScanner();
	}
}
