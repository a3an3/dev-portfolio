<script>
	import { AboutMeSection, HeroSection, MyWorkSection, SkillsSection } from '$components';

	const { data } = $props();

	// derived for reactivities
	let { workExperience, projects, skills } = $derived(data);
	$inspect(skills);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />