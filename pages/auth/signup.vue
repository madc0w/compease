<template>
	<div class="auth-page">
		<div class="auth-container">
			<div class="auth-card">
				<h1>{{ $t('auth.createAccount') }}</h1>
				<p class="auth-subtitle">{{ $t('app.tagline') }}</p>

				<form @submit.prevent="handleSignUp" class="auth-form">
					<div class="form-group">
						<label for="email">{{ $t('auth.email') }}</label>
						<input
							id="email"
							v-model="email"
							type="email"
							required
							autocomplete="email"
						/>
					</div>

					<div class="form-group">
						<label for="password">{{ $t('auth.password') }}</label>
						<input
							id="password"
							v-model="password"
							type="password"
							required
							autocomplete="new-password"
						/>
					</div>

					<div class="form-group">
						<label for="confirmPassword">{{
							$t('auth.confirmPassword')
						}}</label>
						<input
							id="confirmPassword"
							v-model="confirmPassword"
							type="password"
							required
							autocomplete="new-password"
						/>
					</div>

					<button
						type="submit"
						class="btn btn-primary btn-full"
						:disabled="isLoading"
					>
						{{ isLoading ? $t('common.loading') : $t('auth.signUp') }}
					</button>
				</form>

				<p class="auth-switch">
					{{ $t('auth.hasAccount') }}
					<NuxtLink :to="localePath('/auth/signin')">
						{{ $t('auth.signIn') }}
					</NuxtLink>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isLoading = ref(false);

const handleSignUp = async () => {
	if (password.value !== confirmPassword.value) {
		// TODO: Show error message
		console.error('Passwords do not match');
		return;
	}

	isLoading.value = true;
	try {
		// TODO: Implement actual registration
		console.log('Sign up with:', {
			email: email.value,
			password: password.value,
		});
		// For now, just simulate a delay
		await new Promise((resolve) => setTimeout(resolve, 1000));
		// Redirect to signin on success
		// router.push(localePath('/auth/signin'))
	} catch (error) {
		console.error('Sign up error:', error);
	} finally {
		isLoading.value = false;
	}
};

useHead({
	title: `${t('auth.signUp')} - ${t('app.name')}`,
});
</script>

<style scoped>
.auth-page {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6rem 1.5rem 2rem;
	background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
}

.auth-container {
	width: 100%;
	max-width: 400px;
}

.auth-card {
	background: white;
	padding: 2.5rem;
	border-radius: var(--radius-lg);
	box-shadow: var(--shadow-lg);
}

.auth-card h1 {
	font-size: 1.75rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 0.5rem;
	color: var(--color-text);
}

.auth-subtitle {
	text-align: center;
	color: var(--color-text-muted);
	margin-bottom: 2rem;
}

.auth-form {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.form-group label {
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--color-text);
}

.form-group input {
	padding: 0.75rem 1rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
	font-size: 1rem;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus {
	outline: none;
	border-color: var(--color-primary);
	box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.btn-full {
	width: 100%;
	margin-top: 0.5rem;
}

.auth-switch {
	text-align: center;
	margin-top: 1.5rem;
	font-size: 0.875rem;
	color: var(--color-text-muted);
}

.auth-switch a {
	color: var(--color-primary);
	font-weight: 500;
}

.auth-switch a:hover {
	text-decoration: underline;
}
</style>
