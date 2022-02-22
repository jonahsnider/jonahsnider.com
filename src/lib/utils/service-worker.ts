import * as workbox from 'workbox-window';

const {Workbox} = workbox;

export async function registerServiceWorker(): Promise<void> {
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('/service-worker.js');
		await wb.register();
	}
}
