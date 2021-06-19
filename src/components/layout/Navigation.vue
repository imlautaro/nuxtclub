<template>
	<nav class="bg-white shadow">
		<container class="flex items-center justify-between">
			<brand />
			<div class="flex items-center py-4 space-x-2">
				<nav-item to="/blog">Blog</nav-item>
				<nav-item to="/about">About</nav-item>
				<nav-item to="/contact">Contact</nav-item>
				<nav-item to="/login">Login</nav-item>
				<nuxt-link class="btn btn--primary" to="/register"
					>Register for free</nuxt-link
				>
			</div>
		</container>
	</nav>
</template>
