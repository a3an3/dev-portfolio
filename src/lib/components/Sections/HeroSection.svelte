<script lang="ts">
	import { Button } from '$components/index.js';
	import { smoothScrollTo } from '$lib/utils/navigation';
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Adrian</h3>
	<div class="underscore mb-m"></div>
	<h1>Full-stack engineer,</h1>
	<h1 class="dark-grey">from first commit to production</h1>
	<Button className="mt-m" scrollTarget="/#contact-form" onclick={smoothScrollTo}>Let's talk!</Button>
</section>

<style>
    .hero-section {
        padding-top: 60px;
    }

</style>