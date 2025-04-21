<script>
	import { AboutMeSection, HeroSection, MyWorkSection } from '$components';

	const { data } = $props();

	// derived for reactivities
	let { workExperience, projects } = $derived(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />