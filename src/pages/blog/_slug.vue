<template>
	<div class="prose">
		<template v-if="article">
			<h1>{{ article.title }}</h1>
			<nuxt-content :document="article" />
		</template>
		<template v-else>
			<h1>Page not found</h1>
		</template>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		let article = null
		try {
			article = await $content('blog', params.slug).fetch()
		} catch {
			article = null
		}
		return article
			? { article }
			: error({ statusCode: 404, message: 'Page not founud' })
	},
	head() {
		return {
			title: this.article.title,
		}
	},
}
</script>
