<script>
	import { AboutMeSection, HeroSection, MyWorkSection, SkillsSection, ContactSection } from '$components';
	import { afterNavigate, pushState } from '$app/navigation';

	const { data } = $props();

	// derived for reactivities
	let { workExperience, projects, skills } = $derived(data);

	afterNavigate(() => {
		const hash = window.location.hash;

		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				// small timeout lets the DOM settle (especially useful with transitions or lazy content)
				window.scrollTo({ top: 0 });
				pushState('/', {});
				/**setTimeout(() => {
					el.scrollIntoView({ behavior: 'smooth' });
				}, 0);**/
			}
		} else {
			window.scrollTo({ top: 0 });
		}
	});
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />