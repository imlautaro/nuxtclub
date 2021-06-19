<template>
	<div class="flex flex-col space-y-4">
		<h1 class="text-4xl font-bold">Blog</h1>
		<nuxt-link
			v-for="article in articles"
			:key="article.slug"
			:to="`/blog/${article.slug}`"
			class="px-4 py-2 rounded-md hover:bg-gray-200 bg-gray-100"
		>
			{{ article.title }}
		</nuxt-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
	head() {
		return {
			title: 'Blog',
		}
	},
	setup() {
		const { $content } = useContext()
		const articles = useAsync(() => $content('blog').fetch())

		return { articles }
	},
})
</script>
