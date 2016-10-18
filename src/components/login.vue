	<template>
		<div class="login">
			<fastlogin></fastlogin>
			<div class="input">
				<span class="account"></span>
				<input type="text" placeholder="请输入手机号或邮箱">
			</div>
			<div class="input">
				<span class="pwd"></span>
				<input type="password" placeholder="请输入密码">
			</div>
			<div class="err_msg"></div>
			<div class="btn"><a>立即登录</a></div>
			<p>没有账号？ <a href="#">立即注册</a></p>
		</div>
	</template>
	<style>
		.login .input{ overflow: hidden; margin-top: 1px; background: #fff; padding:8px 0; }
		.login .input span{ float: left; width: 15%; height: 36px; }
		.login .input span.account{ background: url(../imgs/ic_user.png) no-repeat center center; background-size: 60%; }
		.login .input span.pwd{ background: url(../imgs/ic_psd.png) no-repeat center center; background-size: 60%; }
		.login .input input{ float: left; width: 80%; height: 36px; margin-left: 2%; line-height: 36px; font-size: 18px; color: #999; }
		.login .btn{ text-align: center; margin-top: 30px; }
		.login .btn a{ display: inline-block; width: 80%; height: 44px; line-height: 44px; color: #fff; background: #644b3f; text-align: center; border-radius: 5px; }
		.login .err_msg{ color: #dd4b39; text-align: center; margin-top: 10px; }
		.login p{ text-align: center; margin-top: 20px; }
		.login p a{ color: #b2b2b2; text-decoration: underline; }
	</style>
	<script>
		var FastLogin=require("../components/fast_login.vue");
		export default{
			el:"#login_container",
			components:{
				fastlogin:FastLogin
			}
		}
	</script>