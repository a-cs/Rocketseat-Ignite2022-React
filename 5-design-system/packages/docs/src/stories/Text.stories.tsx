import type {StoryObj, Meta} from "@storybook/react"
import {Text, TextProps} from "@ignite-ui/react"

export default {
	title: "Typography/Text",
	component: Text,
	args: {
		children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum laborum beatae dolorem tenetur cupiditate aut, id totam fugiat voluptatum similique autem praesentium alias! Excepturi, illum? Molestias esse earum quasi similique."
	},
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: "Strong text",
		as: "strong"
	}
}