	<template>
		<div class="register">
			<fastlogin></fastlogin>
			<div class="input">
				<span class="ic_account"></span>
				<input type="text" placeholder="请输入手机号或邮箱">
			</div>
			<div class="input">
				<span class="ic_pwd"></span>
				<input type="password" placeholder="请输入密码">
			</div>
			<div class="input">
				<span class="ic_pwd"></span>
				<input type="password" placeholder="请再次输入密码">
			</div>
			<div class="input">
				<span class="ic_code"></span>
				<input class="ip_code" type="text" placeholder="请输入验证码">
				<span class="code"></span>
			</div>
			<div class="err_msg"></div>
			<div class="agreement">
				<label><input type="checkbox" checked>我已阅读并同意</label><a href="#">《阅路小说网用户协议》</a>
			</div>
			<div class="btn"><a>立即注册</a></div>
			<p>已有账号？ <a href="#">立即登录</a></p>
		<div>
	</template>
	<style>
		.register .input{ overflow: hidden; margin-top: 1px; background: #fff; }
		.register .input span{ float: left; width: 15%; height: 50px; }
		 .register .input span.ic_account{ background: url(../imgs/ic_user.png) no-repeat center center; background-size: 60%; }
		.register .input span.ic_pwd{ background: url(../imgs/ic_psd.png) no-repeat center center; background-size: 60%; }
		.register .input span.ic_code{ background: url(../imgs/ic_code.png) no-repeat center center; background-size: 60%; } 
		.register .input input{ float: left; width: 80%; height: 34px; margin-left: 2%; padding: 10px 0; font-size: 18px; color: #999; }
		.register .input input.ip_code{ width: 45%; margin-right: 5%; }
		.register .input span.code{ width: 30%; height: 44px; margin-top: 5px; background: #e6e6e6; }
		.register .agreement{ overflow: hidden; }
		.register .agreement a{ color: #f39c12; float: right; }
		.register .btn{ text-align: center; margin-top: 30px; }
		.register .btn a{ display: inline-block; width: 80%; height: 44px; line-height: 44px; color: #fff; background: #644b3f; text-align: center; border-radius: 5px; }
		.register .err_msg{ color: #dd4b39; text-align: center; margin-top: 10px; }
		.register p{ text-align: center; margin-top: 20px; }
		.register p a{ color: #b2b2b2; text-decoration: underline; }
	</style>
	<script>
		var FastLogin=require("../components/fast_login.vue");
		export default{
			el:"#register_container",
			components:{
				fastlogin:FastLogin
			}
		}
	</script>
	