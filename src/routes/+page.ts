import sanityClient, { processProjectEntry } from '$lib/utils/sanity';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async () => {
	const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	const rawProjects: SanityProject[] = await sanityClient.fetch(
		'*[_type == "project"] | order(dateAccomplished desc)'
	);

	const projects = rawProjects.map(processProjectEntry);

	return {
		workExperience,
		projects
	};
};
