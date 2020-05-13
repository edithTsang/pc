<!--优惠券列表组件-->
<template>
  <div class="coupon-list">
    <div v-for="(item,index) in list" :key="index" :class="[item.flag === true? 'item': 'un-item']">
      <div class="left">
        <div style="margin: 10px 0 0 15px;">
          <p>
            {{ item.name }}
          </p>
          <p>{{ item.date }}</p>
          <p>{{ item.tip }}</p>
        </div>
      </div>
      <div class="right">
        <div>
          <p>{{ item.money }}</p>
          <p>{{ item.full }}</p>
          <p v-if="item.flag === true">
            马上使用
          </p>
          <p v-if="item.flag === false">
            已使用
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list']
}
</script>
<style scoped lang="scss">
    .un-item {
        background: url(../../assets/image/un-bg.png) center center no-repeat;
        background-size: cover;
        width: 450px;
        height: 177px;
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
        .left {
            text-align: left;
            width: 50%;
            height: 100%;
            line-height: 20px;
            p:nth-child(1) {
                height: 50px;
                line-height: 50px;
                color: #ccc;
                font-size: 16px;
            }
            p:nth-child(2) {
                height: 30px;
                color: #ccc;
                font-size: 12px;
            }
            p:nth-child(3) {
                height: 30px;
                color: #ccc;
                font-size: 14px;
                line-height: 22px;
            }
        }
        .right {
            width: 50%;
            line-height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            p:nth-child(1) {
                color: #ccc;
                font-size: 30px;
                font-weight: 700;
            }
            p:nth-child(2) {
                color: #ccc;
                font-size: 16px;
            }
            p:nth-child(3) {
                color: #ccc;
                font-size: 16px;
                height: 44px;
                line-height: 44px;
                width: 146px;
                background-color: #fff;
                color: #ccc;
                margin: 0 auto;
                border-radius: 50px;
            }
        }
        /*padding: 18px 0;*/
    }

    .item {
        background: url(../../assets/image/coupon-bg.png) center center no-repeat;
        background-size: cover;
        width: 450px;
        height: 177px;
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
        .left {
            text-align: left;
            width: 50%;
            height: 100%;
            line-height: 20px;
            p:nth-child(1) {
                height: 50px;
                line-height: 50px;
                color: #FF6600;
                font-size: 16px;
            }
            p:nth-child(2) {
                height: 30px;
                color: #999999;
                font-size: 12px;
            }
            p:nth-child(3) {
                height: 30px;
                color: #FDA462;
                font-size: 14px;
                line-height: 22px;
            }
        }
        .right {
            width: 50%;
            line-height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            p:nth-child(1) {
                color: #fff;
                font-size: 30px;
                font-weight: 700;
            }
            p:nth-child(2) {
                color: #fff;
                font-size: 16px;
            }
            p:nth-child(3) {
                color: #fff;
                font-size: 16px;
                height: 44px;
                line-height: 44px;
                width: 146px;
                background-color: #fff;
                color: #000;
                margin: 0 auto;
                border-radius: 50px;
            }
        }
        /*padding: 18px 0;*/
    }
</style>
