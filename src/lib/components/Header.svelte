<script lang="ts">
	import { goto, pushState, afterNavigate } from '$app/navigation';
	import { Button } from '$components/index';

	function smoothScrollTo(event: MouseEvent) {
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

	afterNavigate(() => {
		const hash = window.location.hash;

		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				// small timeout lets the DOM settle (especially useful with transitions or lazy content)
				setTimeout(() => {
					el.scrollIntoView({ behavior: 'smooth' });
				}, 0);
			}
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});
</script>

<nav class="navbar default-margin">
	<a href="/" class="logo">AS</a>
	<div class="navbar-links">
		<a href="/#about-me" class="nav-link" on:click={smoothScrollTo}>About Me</a>
		<a href="/#my-work" class="nav-link" on:click={smoothScrollTo}>My Work</a>
		<Button className="nav-bar" scrollTarget="/#contact-form" onclick={smoothScrollTo}>Contact</Button>
	</div>
</nav>


<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
    }

    .logo {
        font-size: 35px;
        font-weight: bold;
    }

    .navbar-links {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .nav-link:hover {
        text-decoration: underline;
    }

</style>