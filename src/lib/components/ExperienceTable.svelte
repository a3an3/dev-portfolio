<script lang="ts">

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();
</script>

<section class="default-margin work-experience mt-l">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate.slice(0, 7)}
							{#if job.endDate}
								/ {job.endDate.slice(0, 7)}
							{:else }
								/ present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past work <br /> Experience</h2>
</section>

<style>
    .work-experience {
        display: flex;
        justify-content: space-between;
    }

    .work-experience-list {
        width: 50%;
    }

    .company-and-date {
        display: flex;
        justify-content: space-between;
    }

    .headline {
        text-align: right;
        align-content: center;
    }

    .work-item {
        border-bottom: 1px solid #f0eded;
        padding-bottom: 12px;
    }

    .work-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .work-item p {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {

        h2 {
            font-size: 30px;
        }

        .company-and-date {
            display: block;
        }
    }
</style>