<template>
	<div class="bg-gray-100 min-h-screen">
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
