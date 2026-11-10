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
				<i class={skill.iconClass} title={skill.name} aria-label={skill.name}></i>
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
        transition: transform 0.5s ease;
    }

    i::before {
        color: black !important;
        transition: color 0.5s ease;
    }

    /* On hover: remove override to reveal original */
    i:hover::before {
        color: unset !important;
    }

    i:hover {
        transform: scale(1.3) translateZ(10px);
    }

    @media (max-width: 768px) {
        i {
            font-size: 40px;
        }
    }
</style>