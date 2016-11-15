<style>
	.header header{ height: .9rem; background: #644b3f; }
</style>
<template>
	<div class="header">
		<header>
			<div class="logo"></div>
			<div class="login"></div>
		</header>
		<nav>
			<router-link to="/library">书库</router-link>
			<router-link to="/rank">排行</router-link>
			<router-link to="/complete">全本</router-link>
			<router-link to="/recharge">充值</router-link>
			<router-link to="/bookshelf">书架</router-link>
		</nav>
	</div>
</template>