<template>
	<div class="landing-page">
		<!-- Hero Section -->
		<section class="hero">
			<div class="hero-content">
				<h1>{{ $t('landing.hero.title') }}</h1>
				<p>{{ $t('landing.hero.subtitle') }}</p>
				<div class="hero-buttons">
					<NuxtLink
						:to="localePath('/auth/signup')"
						class="btn btn-primary btn-lg"
					>
						{{ $t('auth.signUp') }}
					</NuxtLink>
					<NuxtLink
						:to="localePath('/auth/signin')"
						class="btn btn-secondary btn-lg"
					>
						{{ $t('auth.signIn') }}
					</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="features">
			<div class="container">
				<h2>{{ $t('landing.features.title') }}</h2>
				<div class="features-grid">
					<div class="feature-card">
						<div class="feature-icon">📊</div>
						<h3>{{ $t('landing.features.feature1.title') }}</h3>
						<p>{{ $t('landing.features.feature1.description') }}</p>
					</div>
					<div class="feature-card">
						<div class="feature-icon">📈</div>
						<h3>{{ $t('landing.features.feature2.title') }}</h3>
						<p>{{ $t('landing.features.feature2.description') }}</p>
					</div>
					<div class="feature-card">
						<div class="feature-icon">🔗</div>
						<h3>{{ $t('landing.features.feature3.title') }}</h3>
						<p>{{ $t('landing.features.feature3.description') }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

// SEO
useHead({
	title: t('app.name'),
	meta: [{ name: 'description', content: t('app.description') }],
});
</script>

<style scoped>
.landing-page {
	padding-top: 4rem; /* Account for fixed header */
}
</style>
