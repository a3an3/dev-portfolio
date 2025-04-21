<script>
	import { AboutMeSection, HeroSection, MyWorkSection, SkillsSection, ContactSection } from '$components';

	const { data } = $props();

	// derived for reactivities
	let { workExperience, projects, skills } = $derived(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />