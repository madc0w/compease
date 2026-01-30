<template>
	<div class="language-switcher">
		<button
			class="language-btn"
			@click="toggleDropdown"
			:aria-expanded="isOpen"
			:aria-label="$t('common.language')"
		>
			<span class="language-icon">🌐</span>
			<span>{{ currentLocaleName }}</span>
			<span class="dropdown-arrow">{{ isOpen ? '▲' : '▼' }}</span>
		</button>

		<div v-if="isOpen" class="language-dropdown" @click.stop>
			<button
				v-for="locale in availableLocales"
				:key="locale.code"
				class="language-option"
				:class="{ active: locale.code === currentLocale }"
				@click="switchLocale(locale.code)"
			>
				{{ locale.name }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isOpen = ref(false);

const currentLocale = computed(() => locale.value);

const availableLocales = computed(() => {
	return locales.value.map((l) => {
		if (typeof l === 'string') {
			return { code: l, name: l };
		}
		return { code: l.code, name: l.name || l.code };
	});
});

const currentLocaleName = computed(() => {
	const current = availableLocales.value.find(
		(l) => l.code === currentLocale.value
	);
	return current?.name || currentLocale.value;
});

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const switchLocale = (code: string) => {
	navigateTo(switchLocalePath(code as 'en' | 'fr' | 'de'));
	isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
	const target = event.target as HTMLElement;
	if (!target.closest('.language-switcher')) {
		isOpen.value = false;
	}
};

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.language-switcher {
	position: relative;
}

.language-btn {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 0.75rem;
	background-color: transparent;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
	font-size: 0.875rem;
	color: var(--color-text);
	cursor: pointer;
	transition: all 0.2s ease;
}

.language-btn:hover {
	background-color: var(--color-surface);
}

.language-icon {
	font-size: 1rem;
}

.dropdown-arrow {
	font-size: 0.625rem;
	margin-left: 0.25rem;
}

.language-dropdown {
	position: absolute;
	top: calc(100% + 0.5rem);
	right: 0;
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
	box-shadow: var(--shadow-lg);
	min-width: 150px;
	z-index: 50;
	overflow: hidden;
}

.language-option {
	display: block;
	width: 100%;
	padding: 0.75rem 1rem;
	text-align: left;
	background: none;
	border: none;
	font-size: 0.875rem;
	color: var(--color-text);
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.language-option:hover {
	background-color: var(--color-surface);
}

.language-option.active {
	background-color: var(--color-primary);
	color: white;
}
</style>
