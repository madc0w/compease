<template>
	<header class="header">
		<div class="container header-content">
			<NuxtLink :to="localePath('/')" class="logo">
				{{ $t('app.name') }}
			</NuxtLink>

			<div class="nav-actions">
				<LanguageSwitcher />
				<NuxtLink :to="localePath('/auth/signin')" class="btn btn-secondary">
					{{ $t('auth.signIn') }}
				</NuxtLink>
				<NuxtLink :to="localePath('/auth/signup')" class="btn btn-primary">
					{{ $t('auth.signUp') }}
				</NuxtLink>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';

const localePath = useLocalePath();
</script>
