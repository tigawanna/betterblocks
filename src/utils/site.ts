export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Better Blocks",
	description: "Your premium property discovery platform",
	navItems: [
		{ label: "Listings", href: "/listings" },
		{ label: "About", href: "/about" },
		{ label: "Showcase", href: "/showcase" },
	],
	navMenuItems: [
		{	label: "Listings",	href: "/listings"},
		{	label: "About",	href: "/about"},
		{	label: "Showcase",	href: "/showcase"},
	
	],
	links: {
	twitter: "https://twitter.com/betterblocks",
	facebook: "https://facebook.com/betterblocks",
	instagram: "https://instagram.com/betterblocks",
	whatsapp: "https://whatsapp.com",
	email: "betterblocks.com",
}
	,
};
