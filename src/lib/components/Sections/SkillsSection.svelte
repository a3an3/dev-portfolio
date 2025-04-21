<script lang="ts">
	import { SectionHeadline } from '$components';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill}
				<i class={skill.iconClass}></i>
			{/each}
		</div>
	</div>
</section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skills-container {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 16px;
        column-gap: 10px;
    }

    i {
        font-size: 80px;
        color: #5e5e5e;
        transition: transform 0.5s ease, color 0.5s ease;
    }

    i:hover {
        transform: scale(1.3) translateZ(10px);
        z-index: 100;
        color: black; /* or any color you like */
    }
</style>