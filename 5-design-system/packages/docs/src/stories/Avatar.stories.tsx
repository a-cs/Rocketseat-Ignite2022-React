import type {StoryObj, Meta} from "@storybook/react"
import {Avatar, AvatarProps, Text} from "@ignite-ui/react"

export default {
	title: "Data display/Avatar",
	component: Avatar,
	args: {
		src: "https:github.com/a-cs.png",
		alt: "Anderson Carneiro Sousa"
	},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
	args: {
		src: undefined
	},
}