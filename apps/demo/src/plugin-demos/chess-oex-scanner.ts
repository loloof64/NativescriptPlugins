import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedChessOexScanner } from '@demo/shared';
import {} from '@loloof64/chess-oex-scanner';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedChessOexScanner {}
