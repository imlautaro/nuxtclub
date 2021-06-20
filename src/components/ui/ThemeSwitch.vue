<template>
	<button
		@click="switchColorMode"
		class="p-2 rounded-full duration-100 hover:bg-black hover:bg-opacity-5"
	>
		<octicons v-if="$colorMode.value == 'light'" name="moon" />
		<octicons v-else name="sun" />
	</button>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
	setup() {
		const { $colorMode } = useContext()
		const switchColorMode = () => {
			if ($colorMode.value == 'dark') {
				$colorMode.preference = 'light'
			} else {
				$colorMode.preference = 'dark'
			}
		}
		return { switchColorMode }
	},
})
</script>
