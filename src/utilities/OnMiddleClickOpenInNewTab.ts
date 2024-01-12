export function onMiddleClickOpenInNewTab(
	e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
	url: string
) {
	if (e.button === 1) {
		const win = window.open(url, "_blank");
		if (win) win.focus();
	}
}
