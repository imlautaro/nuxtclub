<template>
	<div
		class="bg-gradient-to-br from-gray-800 to-gray-900 bg-fixed text-gray-800 dark:text-white min-h-screen"
	>
		<ui-scroll-indicator />
		<layout-navigation />
		<container class="py-8">
			<nuxt />
		</container>
		<footer class="bg-gray-800 shadow text-white">
			<container class="text-center py-8">
				<brand-logotype /> &copy; {{ new Date().getFullYear() }}
			</container>
		</footer>
	</div>
</template>
