<template>
	<footer class="footer">
		<div class="container footer-content">
			<div class="footer-links">
				<a href="#">{{ $t('footer.privacy') }}</a>
				<a href="#">{{ $t('footer.terms') }}</a>
			</div>
			<p class="footer-copyright">
				© {{ currentYear }} {{ $t('app.name') }}. {{ $t('footer.rights') }}.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
