<script lang="ts">
	import { Button } from '$components/index.js';
	import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Adrian</h3>
	<div class="underscore mb-m"></div>
	<h1> I'm a Svelte developer crafting intuitive and performant</h1>
	<h1 class="dark-grey">web experiences</h1>
	<Button {onclick}>Let's talk!</Button>
</section>

<style>
    .hero-section {
        padding-top: 60px;
    }

</style>