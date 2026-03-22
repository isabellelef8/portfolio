export interface Campaign {
	number: string;
	title: string;
	slug: string;
	subtitle: string;
}

export const campaigns: Campaign[] = [
	{ number: '01', title: 'Noir Woods', slug: 'noir-woods', subtitle: 'Campaign subtitle' },
	{ number: '02', title: 'Campaign Two', slug: 'campaign-two', subtitle: 'Campaign subtitle' },
	{ number: '03', title: 'Campaign Three', slug: 'campaign-three', subtitle: 'Campaign subtitle' },
	{ number: '04', title: 'Campaign Four', slug: 'campaign-four', subtitle: 'Campaign subtitle' },
	{ number: '05', title: 'Campaign Five', slug: 'campaign-five', subtitle: 'Campaign subtitle' },
	{ number: '06', title: 'Campaign Six', slug: 'campaign-six', subtitle: 'Campaign subtitle' },
	{ number: '07', title: 'Campaign Seven', slug: 'campaign-seven', subtitle: 'Campaign subtitle' }
];
