<script lang="ts">
	import '../app.css';
	import { Footer, Header } from '$components';

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />