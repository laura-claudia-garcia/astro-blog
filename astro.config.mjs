// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import supportSidebar from './src/generated/support-sidebar.mjs';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fusang Support',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: supportSidebar.length > 0 ? supportSidebar : [{ label: 'Support', autogenerate: { directory: 'support' } }],
		}),
	],
});
