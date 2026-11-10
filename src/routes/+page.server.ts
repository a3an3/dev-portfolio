import sanityClient, { processProjectEntry } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';

// Runs on the server only: the browser never calls the Sanity API directly,
// so no CORS origin has to be whitelisted for every Vercel preview URL.
export const prerender = true;

export const load: PageServerLoad = async () => {
	const [workExperience, rawProjects, skills] = await Promise.all([
		sanityClient.fetch<SanityWorkExperience[]>('*[_type == "devExperience"] | order(startDate desc)'),
		sanityClient.fetch<SanityProject[]>('*[_type == "project"] | order(dateAccomplished desc)'),
		sanityClient.fetch<Skill[] | null>('*[_type == "skills"][0].skillsList')
	]);

	return {
		workExperience,
		projects: rawProjects.map(processProjectEntry),
		skills: skills ?? []
	};
};
