<script lang="ts">
	import { Button } from '$components/index';
	import { smoothScrollTo } from '$lib/utils/navigation';
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

    @media (max-width: 768px) {
        .navbar-links {
            gap: 20px;
        }
    }

</style>