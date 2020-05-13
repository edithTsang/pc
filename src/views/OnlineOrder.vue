<template>
  <div class="index-center">
    <!-- 左边 -->
    <div class="logo-left">
      <ul class="logo-structure">
        <li>
          <div class="stucture">
            <img src="../assets/image/ploceOrder.png">
            <div class="stucture-text">
              下单
            </div>
          </div>
          <div class="triangle" />
        </li>
        <li>
          <div
            class="stucture"
            style="margin-left: 0px;"
          >
            <img src="../assets/image/orderbg.png">
            <div>我的订单</div>
          </div>
          <!--  <div class="triangle"></div> -->
          <div style="width: 30px;height: 30px;" />
        </li>
        <li>
          <div class="stucture">
            <img src="../assets/image/shopping.png">
            <div>收银台</div>
          </div>
          <div style="width: 30px;height: 30px;" />
          <!-- <div class="triangle"></div> -->
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="order-right">
      <div class="orderLift">
        <div class="single-line">
          <div class="single">
            <img src="../assets/image/ordersea.png">
            <span>海运</span>
          </div>
          <div class="nosingle ">
            <img src="../assets/image/orderairno.png">
            <span>空运</span>
          </div>
          <div class="nosingle">
            <img src="../assets/image/orderexpressage.png">
            <span>快递</span>
          </div>
        </div>
        <!-- 搜索线路 -->
        <div class="line">
          <ul class="testing">
            <li class="checked-test">
              单选线路
            </li>
            <li>多选线路</li>
          </ul>
        </div>
        <div class="collection">
          <img
            src="../assets/image/ordersearch.png"
            class="ordersearch"
          >
          <div class="collection-goods">
            <input
              v-model="input"
              type="text"
              placeholder="输入货物起点"
            >
            <input
              v-model="input"
              type="text"
              placeholder="输入货物目的地"
            >
            <input
              v-model="input"
              type="text"
              placeholder="输入目的地仓库"
            >
          </div>
        </div>
        <div class="all-weight">
          <div class="weight">
            <img src="../assets/image/weight.png">
            <input
              v-model="input"
              type="text"
              placeholder="输入货物重量"
            >
            <span>KG</span>
          </div>
          <div>
            <img src="../assets/image/vomule.png">
            <input
              v-model="input"
              type="text"
              placeholder="输入货物体积"
            >
            <span>CBM</span>
          </div>
        </div>
        <!-- 确定按钮 -->
        <div class="subimt">
          确定
        </div>
      </div>
      <div class="orderRight">
        <div class="offer">
          特价线路
        </div>
        <div class="order-offer">
          <div
            v-for="(item, index) in oferItem"
            :key="index"
            class="offer-item"
          >
            <div class="offer-bar">
              {{ item.bar }}
            </div>
            <P class="offer-text">
              {{ item.text }}
            </P>
            <p>
              {{ item.star }} ----- {{ item.bourn }} {{ item.warehouse }}
              <span class="offer-day">({{ item.time }}天)</span>
            </p>
            <div class="decline">
              <span class="offer-price">特价8.5元</span>
              直降20%
              <img src="../assets/image/decline.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OnlineOrder',
  data() {
    return {
      input: '',
      oferItem: [
        { bar: '海加派', text: '美国海派FBA（EMC特价）', star: '深圳市', bourn: '美国', warehouse: 'ABE3', time: '12-24' },
        { bar: '海加派', text: '美国海派FBA（EMC特价）', star: '深圳市', bourn: '美国', warehouse: 'ABE3', time: '12-24' },
        { bar: '海加派', text: '美国海派FBA（EMC特价）', star: '深圳市', bourn: '美国', warehouse: 'ABE3', time: '12-24' },
        { bar: '海加派', text: '美国海派FBA（EMC特价）', star: '深圳市', bourn: '美国', warehouse: 'ABE3', time: '12-24' }
      ]
    }
  },
  mounted() {},

  methods: {}
}
</script>

<style scoped>
.index {
	width: 100%;
	height: 100%;
}
.index-center {
	width: 100%;
	display: flex;
	height: 82%;
}
.logo-left {
	background: #ffffff;
	width: 130px;
	height: 100%;
	height: 100%;
}
.logo-structure {
	list-style: none;
	text-align: right;
	-webkit-padding-start: 0px;
}
.logo-structure li {
	display: flex;
	border-bottom: 1px solid #ededed;
	padding: 17px 0px 17px 30px;
	width: 100px;
	justify-content: space-between;
}
.logo-structure li img {
	width: 50px;
	height: 50px;
}
.stucture {
	text-align: center;
	margin-left: 10px;
}
/* 三角型 */
.triangle {
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-right-color: black;
	margin-top: 10px;
}
.stucture-text {
	color: rgba(247, 176, 0, 1);
	font-weight: 900;
}
.orderLift{width:46%;margin-right: 2%;}
.order-right {

	margin-left:2%;
	display: flex;
}
.single-line {
	display: flex;
	margin-top: 26px;
	margin-bottom: 40px;
}
.single-line span {
	margin-left: 38px;
}
/* 选中时 */
.single {
	width: 32%;
	height: 39px;
	background: rgba(35, 47, 62, 1);
	box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.09);
	border-radius: 10px 0px 0px 10px;
	display: flex;
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	color: #ffffff;
	margin-right: 2px;
}
/* 未选中 */
.nosingle {
	width: 32%;
	height: 39px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.09);
	display: flex;
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	margin-right: 2px;
}
.line{
	width: 100%;
}
/* 搜索线路 */
.testing {
	width: 100%;
	list-style: none;
	display: flex;
	-webkit-padding-start: 0px;
}
.testing li {
	width:50%;
	height: 46px;
	line-height: 36px;
	border-bottom: 3px solid #d6d6d6;
	color: #d6d6d6;
	font-size: 24px;
}
.checked-test {
	border-bottom: 3px solid #232f3e !important;
	color: #2c3e50 !important;
}
.collection {
	width:96%;
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
	margin-left: 4%;
}
.ordersearch {
	width: 15px;
	height: 90px;
	margin-top: 15px;
}
.collection-goods{width: 94%;}
.collection-goods input {
	width:100%;
	height: 36px;
	border: none;
	border-bottom: 1px solid #999999;
	font-size: 15px;
	background: #ededed;
	line-height: 36px;
	color: #999999;
}
.collection-goods input:focus {
	outline: none;
}
/* 重量体积 */
.all-weight {
	width: 96%;
	margin-left:4%;
	margin-top: 44px;
}
.all-weight div {
	display: flex;
	justify-content: space-between;
	position: relative;
}
.all-weight input {
	width: 94%;
	height: 36px;
	border: none;
	border-bottom: 1px solid #999999;
	font-size: 15px;
	background: #ededed;
	line-height: 36px;
	color: #999999;
}
.all-weight input:focus {
	outline: none;
}
.all-weight div img {
	width: 24px;
	height: 24px;
	margin-top: 5px;
}
.all-weight div span {
	width: 46px;
	height: 13px;
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: rgba(35, 47, 62, 1);
	line-height: 48px;
	position: absolute;
	top: 0px;
	right: 2px;
	text-align: center;
}
.subimt {
	width: 385px;
	height: 53px;
	background: rgba(247, 176, 0, 1);
	border-radius: 27px;
	font-size: 24px;
	line-height: 53px;
	margin: 50px auto;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
/* 特价线路 */
.orderRight {
	width:80%;
	margin-top: 38px;
}
.offer {
	width: 100%;
	height: 44px;
	line-height: 26px;
	font-size: 25px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(35, 47, 62, 1);
	border-bottom: 1px solid #999999;
	text-align: left;
}
.order-offer {
	margin-top: 4px;
	flex-wrap: wrap;
	display: flex;
	justify-content: flex-start;
}
.offer-item {
	width: 32%;
	background: rgba(255, 255, 255, 1);
	border-radius: 10px;
	height: 197px;
	margin-top: 24px;
	margin-right: 1%;
}
.offer-bar {
	width: 94px;
	height: 32px;
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: 300;
	color: rgba(255, 255, 255, 1);
	background-image: url(../assets/image/orderBar.png);
	background-size: 100% 100%;
	line-height: 32px;
}
.offer-text {
	font-size: 20px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: rgba(35, 47, 62, 1);
}
.offer-day {
	color: #f7b000;
	font-size: 16px;
	font-weight: 300;
}
.offer-price {
	width: 135px;
	height: 30px;
	font-size: 30px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: rgba(247, 176, 0, 1);
	margin-right: 23px;
}
.decline {
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: bold;
	color: #cccccc;
}

/* 兼容 */
@media (min-width: 1366px) and (max-width: 1440px){
.offer-item{
	width: 32%;
	background: rgba(255, 255, 255, 1);
	border-radius: 10px;
	height: 197px;
	margin-top: 24px;
	margin-right: 1%;
}
}
@media (min-width: 1200px) and (max-width: 1366px){
.offer-item{
    width: 49%;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 197px;
    margin-top: 24px;
    margin-right: 1%;
}
}
@media (min-width: 1100px) and (max-width: 1200px){
.offer-item{
    width: 49%;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 197px;
    margin-top: 24px;
    margin-right: 1%;
}
} /*>=1100的设备*/
</style>
