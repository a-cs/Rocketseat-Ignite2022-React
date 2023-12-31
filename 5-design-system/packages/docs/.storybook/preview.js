/** @type { import('@storybook/react').Preview } */
import { themes } from "@storybook/theming"
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
const preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'light',
					value: '#F8F8F8',
				},
				{
					name: 'dark',
					value: '#333333',
				},
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			theme: themes.dark,
			container: DocsContainer,
			page: DocsPage,
		},
	},
};

export default preview;
