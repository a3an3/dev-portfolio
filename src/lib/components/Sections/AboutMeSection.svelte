<script lang="ts">
	import { Button, ExperienceTable, SectionHeadline } from '$components';
	import image from '$assets/adrian-setka.jpg';
	import { smoothScrollTo } from '$lib/utils/navigation';

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="Adrian Setka" />
		<div class="description">
			<div class="text">
				<p>
					Hey, I'm Adrian, a full-stack engineer based in Berlin with more than four years of fully remote work.
					I mostly build with TypeScript, from Svelte and Angular frontends to Node.js and Kotlin backends, and I
					like owning the infrastructure and CI/CD that keep it running.
				</p>
				<p>
					At Gofore (formerly eMundo) I worked for a German premium automotive OEM. I designed and built a test
					monitoring web UI that test engineers and product managers used every day, set up the AWS infrastructure
					for an ML-based HMI test automation platform from scratch and owned its Angular annotation frontend.
				</p>
				<p>
					Since January 2026 I have been building ImmoNerd, a multi-tenant SaaS for real estate investors with LLM
					document processing, Stripe billing and paying customers. I hold an M.Sc. in Physics and Technology for
					Space Travel Applications (grade 1.4).
				</p>
				<p>
					I'm looking for a remote role (EU or Germany) or a hybrid one in Berlin or Valencia. If that fits your
					team, let's talk.
				</p>
			</div>
			<div class="button-wrapper">
				<Button className="mt-m" scrollTarget="/#contact-form" onclick={smoothScrollTo}>Get in touch</Button>
			</div>
		</div>
	</div>
	<ExperienceTable {workExperience}></ExperienceTable>
</section>

<style>
    .content-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .image {
        width: 42%;
        height: 450px;
        border-radius: 20px;
        object-fit: cover;
    }

    .description {
        width: 55%;
    }

    .text {
        max-height: 450px;
        overflow-y: auto;
        text-align: left;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
    }
</style>