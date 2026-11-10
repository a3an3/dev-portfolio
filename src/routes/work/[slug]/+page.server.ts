import sanityClient, { processProjectEntry } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const project = await sanityClient.fetch<SanityProject | null>(
		'*[_type == "project" && slug == $slug][0]',
		{ slug: params.slug }
	);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project: processProjectEntry(project) };
};
