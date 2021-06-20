<template>
	<nav
		class="bg-blured sticky top-0 border-b border-white border-opacity-5 shadow-xl"
	>
		<container class="flex items-center justify-between">
			<brand />
			<div class="flex items-center py-6 space-x-2">
				<nav-item to="/blog">Blog</nav-item>
				<nav-item to="/about">About</nav-item>
				<nav-item to="/contact">Contact</nav-item>
				<nav-item to="/login">Login</nav-item>
				<nuxt-link class="btn btn--primary" to="/register"
					>Register for free</nuxt-link
				>
				<ui-theme-switch />
			</div>
		</container>
	</nav>
</template>
