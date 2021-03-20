import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ChessOexScannerComponent } from './chess-oex-scanner.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ChessOexScannerComponent }])],
	declarations: [ChessOexScannerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ChessOexScannerModule {}
