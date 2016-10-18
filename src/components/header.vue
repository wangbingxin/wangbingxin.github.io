	<script>
		export default{
			el:"#header-container",
			props:["title"],
			methods:{
				aaa(){
					console.log(document.body.clientWidth);
				}
			}
		}
	</script>
	<template> <!-- document.body.clientWidth -->
		<div class="header"><a class="back" @click="aaa"></a>{{title}}<a href="" class="home"></a></div>
	</template>
	<style>
		.header{ background: #644b3f; overflow: hidden; text-align: center; line-height: 50px; font-size: 20px; color: #fff; }
		.header a{ width: 12%; height: 50px; background-size: 50%; top: center; }
		.header .back{ float: left; background: url("../imgs/back.png") no-repeat center center; background-size: 72%; }
		.header .home{ float: right; background: url("../imgs/home.png") no-repeat center center; background-size: 72%; }
	</style>