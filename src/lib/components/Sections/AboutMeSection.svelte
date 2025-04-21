<script lang="ts">
	import { Button, ExperienceTable, SectionHeadline } from '$components';
	import image from '$assets/profile_picture_3.jpeg';
	import { goto } from '$app/navigation';

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="" />
		<div class="description">
			<div class="text">
				<p>
					Hey, I'm Adrian, the driving force behind my freelancing agency specializing in web development and data
					science.
				</p>
				<p>
					With years of hands-on experience tackling real-world coding challenges and meeting diverse client needs, I've
					built a deep understanding of the tech landscape. But beyond coding, my true passion lies in teaching. I've
					had
					the privilege of guiding hundreds of aspiring developers, focusing on making coding both practical and
					accessible.
					My goal is to translate complex concepts into actionable skills that you can apply right away.
				</p>
				<p>
					Through my courses, I'm committed to sharing the insights and lessons I've learned in the field, so you can
					skip
					the pitfalls and fast-track your development journey. If you're eager to learn from real-world experience and
					practical know-how, let's dive in together.
				</p>
			</div>
			<div class="button-wrapper">
				<Button className="mt-m" {onclick}>Tell me about your project</Button>
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
        overflow-y: scroll;
        text-align: left;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
    }
</style>