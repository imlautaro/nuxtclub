<template>
	<div class="grid grid-cols-12 gap-8">
		<div class="col-span-9">
			<div class="bg-white p-8 shadow-md rounded-lg">
				<nuxt-child />
			</div>
		</div>
		<div class="col-span-3">
			<layout-subscribe-form />
		</div>
	</div>
</template>
