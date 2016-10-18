	<script>
		export default{
		}
		QC.Login({
           btnId:"qqLoginBtn"    //插入按钮的节点id
        });
	</script>
	<template>
		<div class="fast_login">
			<fieldset>
				<legend> 快捷登录 </legend>
				<div class="btn_box">
					<div class="button"></div>
					<div class="button"></div>
					<div class="button" id="qqLoginBtn"></div>
				</div>
			</fieldset>
		</div>
	</template>
	<style>
		.fast_login{ background: #fff; padding:18px 0; margin-bottom: 40px; }
		fieldset{ width: 80%; border: solid 1px #ccc; margin: 0 auto; border-radius: 6px; }
		fieldset legend{ text-align: center; }
		.btn_box{ overflow: hidden; }
		.btn_box .button{ float: left; width: 33.333%; height: 80px; }
		.btn_box .button:nth-child(1){ background: url(../imgs/login_weixin.png) no-repeat center center; background-size: 50%; }
		.btn_box .button:nth-child(2){ background: url(../imgs/login_weibo.png) no-repeat center center; background-size: 50%; }
		.btn_box .button:nth-child(3){ background: url(../imgs/login_qq.png) no-repeat center center; background-size: 50%; }
		.btn_box .button a{ display: block; height: 90px; }
		.btn_box .button a img{ display: none; }
	</style>
	
	