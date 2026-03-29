import { campaigns } from '$lib/campaigns';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const campaign = campaigns.find((c) => c.slug === params.slug);
	if (!campaign) throw error(404, 'Campaign not found');
	return { campaign };
};

export function entries() {
	return campaigns.map((c) => ({ slug: c.slug }));
}
