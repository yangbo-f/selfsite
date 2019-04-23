<template>
	<!-- public star -->
	<div class="foot">
		<div class="wrap">
			<el-row>
				<el-col :span="24" class="nav_but">
					<el-row class="but_box">
						<el-col class="but_left" :xl="14" :lg="14" :md="15" :sm="15" :xs="24">
							<p><span>F-Brand</span>枫叶网站建设</p>
							<p>Copyright-2017-2019 All Rights Reserved F-Brand co.,ltd.</p>
							<p class="hide">ADD:北京市昌平区天通苑北街道</p>
							<p class="hide">
								<a href="tel:18712927801">TEL:18712927801</a>
								<a href="mailto:yangbo.f@outlook.com">EMALL:yangbo.f@outlook.com</a>
								<a href="http://www.beianbeian.com/beianxinxi/559320c60eeb6813ab1516024e415e71.html" target="_blank">冀ICP备18007061号-1</a></p>
						</el-col>
						<el-col class="but_right" :xl="10" :lg="10" :md="9" :sm="9" :xs="24">
							<h4>关注我们：</h4>
							<div class="picture"><img src="images/public/picture.png"></div>
							<p class="small_pic wechat"><img src="images/public/WeChat.png"></p>
							<p class="small_pic"><a href="http://wpa.qq.com/msgrd?v=3&uin=2633737510&site=qq&menu=yes" target="_blank"><img src="images/public/qq.png"></a></p>
							<p class="small_pic"><a href="https://weibo.com/6732992432/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank"><img
									src="images/public/sina.png"></a></p>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>

	</div>


<!-- public end -->
</template>
<script>
export default {};
</script>

<style scoped>
/*底部*/

.foot {
	width: 100%;
	height: auto;
	position: relative;
	background: #a40000;
}
.foot .title {
	position: relative;
	padding: 40px 0;
}
.foot .title .small {
	font-size: 40px;
	padding: 0;
}
.foot .title h2 {
	font-size: 34px;
	color: #000;
	padding: 15px 0;
	font-family: "Calibri Light";
	letter-spacing: 0;
}
.foot .title p {
	font-size: 16px;
	padding-top: 20px;
}
.foot .title p a {
	color: #000;
}
.nav_dl:hover {
	color: #a40000 !important;
}
.qqbun {
	width: 10%;
	margin: 0 auto;
}
.qqbun a {
	padding: 4px;
	box-sizing: border-box;
	display: block;
	border: 1px solid #a40000;
}
.qqbun a:hover {
	background: #a40000;
	color: #fff !important;
}
.foot .title .patak {
	color: #000;
	font-weight: bold;
	font-family: "微软雅黑";
	font-size: 26px;
	padding: 0;
	padding-top: 10px;
	padding-bottom: 20px;
}
.line {
	background: #a40000;
	width: 5%;
	height: 2px;
	position: absolute;
	left: 47.5%;
}
.foot_box {
	/* width: 1200px; */
	margin: 0 auto;
}
.ft_nav {
	/* width: 100%; */
	padding-top: 20px;
}
.nav_con {
	padding: 45px;
}
.nav_list {
	width: 22%;
	float: left;
	text-align: center;
}
.nav_list .nav_dl {
	font-size: 16px;
	color: #000;
	padding: 10px;
	font-weight: bold;
	border-bottom: 2px solid #a40000;
	width: 35%;
	margin: 0 auto;
}
.nav_list .nav_dh > a {
	font-size: 14px;
	color: #656565;
	line-height: 1.6;
	padding: 4px 0;
	display: block;
}
.nav_list .nav_dh > a:hover {
	color: #000;
	transition: 0.3s ease-out;
}
.line2 {
	border-top: 2px solid #a40000;
	width: 50%;
	margin: 0 auto;
}
.fr_con {
	/* width: 100%; */
	border-left: 1px solid #ccc;
	box-sizing: border-box;
	padding-left: 100px;
}
.fr_con > h2 {
	font-size: 35px;
	color: #000;
	padding-bottom: 5px;
	font-weight: bold;
}
.fr_con > h2 > span {
	color: #a40000;
}
.fr_con > p {
	font-size: 14px;
	color: #000;
	line-height: 1.6;
}
.fr_con .contact {
	padding-top: 30px;
	padding-bottom: 8px;
}
.fr_con .tel {
	font-size: 30px;
	font-weight: bold;
}
/* .nav_but {
	width: 100%;
	background: #a40000;
} */
.but_box {
	/* width: 1200px; */
	margin: 0 auto;
	padding: 30px 0;
}
/* .but_left {
	width: 60%;
} */
.but_left > p {
	color: #fff;
	font-size: 12px;
	line-height: 3;
}
.but_left > p > a {
	color: #fff;
	font-size: 12px;
	display: inline-block;
	padding-right: 18px;
}
.but_right {
	/* width: 40%; */
	padding-top: 20px;
	position: relative;
}
.but_right > h4 {
	font-size: 16px;
	color: #fff;
	font-weight: bold;
}
.small_pic {
	float: left;
	margin-top: 50px;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	border: 2px solid #fff;
	line-height: 50px;
	text-align: center;
	margin-right: 15%;
	margin-left: 4%;
}
.small_pic img {
	max-width: 60%;
	margin: 0 auto;
}
.small_pic:hover {
	transform: rotate(360deg);
	-webkit-transition: 1.5s all;
}
.title {
	text-align: center;
}
.phshow {
}
.phshow {
	width: 40%;
}
.phshow > h2 {
	font-size: 35px;
	color: #000;
}
.phshow > h2 > span {
	color: #a40000;
}
.phshow > p {
	font-size: 12px;
	color: #000;
	line-height: 1.6;
}
.but_left > p > span {
	font-weight: bold;
	display: inline-block;
	padding-right: 10px;
	font-size: 14px;
}
.line38 {
	position: absolute;
	width: 100%;
	height: 1px;
	background: #dcdddd;
	top: 35%;
}
.foot_box .title .line {
	width: 8%;
	left: 46%;
}
.picture {
	position: absolute;
	width: 80px;
	top: -100px;
	z-index: -1;
	opacity: 0;
}
.picture img {
	width: 100%;
	display: block;
}

.wechat:hover .picture {
	opacity: 1;
	z-index: 1;
	transition: 0.4s;
}

:-webkit-scrollbar-track-piece {
	-webkit-border-radius: 0;
	-webkit-border-bottom-right-radius: 4px;
	-webkit-border-bottom-left-radius: 4px;
	background: #ebebeb;
}
@media (max-width: 767px) {
	.but_left {
		text-align: center;
	}
}
</style>
