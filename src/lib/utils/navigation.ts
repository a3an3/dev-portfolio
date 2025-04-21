import { goto, pushState } from '$app/navigation';

export function smoothScrollTo(event: MouseEvent) {
	event.preventDefault();

	const target = event.currentTarget as HTMLElement;
	const href = target.getAttribute('href') || target.getAttribute('scrollTarget');

	if (!href) return;

	const id = href.split('#')[1];
	const el = document.getElementById(id);

	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
		pushState(href, {});
	} else {
		goto(href); // fallback if element isn't on the same page
	}
}
