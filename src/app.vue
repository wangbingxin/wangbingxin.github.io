<style>
	.main-view{ min-height: 10rem; }
</style>
<template>
	<div>
    	<main-header></main-header>
    	<div class="main-view">
    		<router-view></router-view>
    	</div>
    	<main-footer></main-footer>
    </div>
</template>