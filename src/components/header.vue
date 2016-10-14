	<script>
		export default{
			el:"#header_container"
		}
	</script>
	<template>
		<div class="header"><a href="#" class="back"></a>用户登录<a href="" class="home"></a></div>
	</template>
	<style>
		.header{ background: #644b3f; overflow: hidden; text-align: center; line-height: 50px; font-size: 20px; color: #fff; }
		.header a{ width: 12%; height: 50px; background-size: 50%; top: center; }
		.header .back{ float: left; background: url("../imgs/back.png") no-repeat center center; background-size: 80%; }
		.header .home{ float: right; background: url("../imgs/home.png") no-repeat center center; background-size: 80%; }
	</style>