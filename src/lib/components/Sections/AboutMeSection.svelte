<script lang="ts">
	import { Button, ExperienceTable, SectionHeadline } from '$components';
	import image from '$assets/profile_picture_3.jpeg';
	import { smoothScrollTo } from '$lib/utils/navigation';

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="" />
		<div class="description">
			<div class="text">
				<p>
					Hey, I'm Adrian, a dedicated web developer with a strong focus on delivering modern, efficient, and
					scalable solutions using a wide range of tools.
				</p>
				<p>
					Over the past several years, I’ve worked on a wide range of web projects — from dynamic landing pages and
					responsive websites to full-fledged SaaS platforms. My experience spans both frontend and backend development,
					allowing me to create seamless and integrated systems tailored to client needs.

					I specialize in helping businesses and individuals establish a strong online presence or launch powerful,
					cloud-hosted applications.
				</p>
				<p>
					Outside of my professional work, I have a deep passion for game development. In my spare time, I dive into
					creating games, constantly exploring new techniques in design, gameplay mechanics, and immersive storytelling.
				</p>
				<p>
					If you're looking for a developer who can build your website or web system quickly and professionally, while
					bringing creativity and technical depth to the table — let's connect.
				</p>
			</div>
			<div class="button-wrapper">
				<Button className="mt-m" scrollTarget="/#contact-form" onclick={smoothScrollTo}>Tell me about your project
				</Button>
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