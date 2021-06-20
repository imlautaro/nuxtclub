<template>
	<nuxt-link
		exact-active-class="font-semibold"
		class="hover:bg-white duration-100 hover:bg-opacity-5 px-4 py-2 rounded-full"
		:to="to"
	>
		<slot />
	</nuxt-link>
</template>

<script>
export default {
	props: {
		to: String,
	},
}
</script>
