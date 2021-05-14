<template>
  <div>
    <div>
      <van-nav-bar
        title="交通出行"
        left-arrow
        @click-left="close"
        right-text="明细"
        @click-right="toDetail"
      />
    </div>
    <div style="background: #fff">
      <div class="traffic-card">
        <div class="flex-row card-main">
          <div class="flex-row card-left">
            <div>
              <img src="@/assets/img/bus.png" alt="" />
            </div>
            <div class="flex-column">
              <p class="card-title">长安通公交卡</p>
              <p class="card-number">{{ cardNumber }}</p>
            </div>
          </div>
          <div>
            <div class="flex-column card-rigth">
              <p class="card-money">¥{{ balance }}</p>
              <p class="card-number">余额</p>
            </div>
          </div>
        </div>
      </div>
      <div class="recharge">
        <b class="recharge-title">充值金额</b>
        <div class="recharge-money">
          <van-row gutter="20">
            <van-col span="8">
              <van-button
                plain
                type="primary"
                @click="rechargeMoney = '20'"
                :class="
                  rechargeMoney == '20'
                    ? 'select-recharge-money'
                    : 'no-recharge-money'
                "
              >
                20元
              </van-button>
            </van-col>
            <van-col span="8">
              <van-button
                plain
                type="primary"
                @click="rechargeMoney = '50'"
                :class="rechargeMoney == '50' ? 'select-recharge-money' : ''"
              >
                50元
              </van-button>
            </van-col>
            <van-col span="8">
              <van-button
                plain
                type="primary"
                @click="rechargeMoney = '100'"
                :class="rechargeMoney == '100' ? 'select-recharge-money' : ''"
              >
                100元
              </van-button>
            </van-col>
          </van-row>
          <van-row style="margin-top: 10px" gutter="20">
            <van-col span="8">
              <van-button
                plain
                type="primary"
                @click="rechargeMoney = '300'"
                :class="rechargeMoney == '300' ? 'select-recharge-money' : ''"
              >
                300元
              </van-button>
            </van-col>
            <van-col span="8">
              <van-field
                style="width: 100%"
                type="number"
                :maxlength="4"
                v-model="value"
                @click="rechargeMoney = value"
                :class="
                  rechargeMoney == value
                    ? 'select-recharge-money'
                    : 'other-money'
                "
                placeholder="其他金额"
              />
            </van-col>
            <van-col span="8"></van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div style="background: #fff; margin-top: 10px" class="recharge">
      <b class="recharge-title">支付方式</b>
      <van-radio-group v-model="radio">
        <van-cell-group :border="false">
          <van-cell clickable @click="radio = '1'" :border="false">
            <template #icon>
              <img src="@/assets/img/zhifubaozhifu.png" alt="" />
            </template>
            <template #title>
              <p class="pay-type">支付宝支付</p>
            </template>
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell clickable @click="radio = '2'" :border="false">
            <template #icon>
              <img src="@/assets/img/weixin.png" alt="" />
            </template>
            <template #title>
              <p class="pay-type">微信支付</p>
            </template>
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell clickable @click="radio = '3'" :border="false">
            <template #icon>
              <img src="@/assets/img/yinhangqia-4.png" alt="" />
            </template>
            <template #title>
              <p class="pay-type">银行卡钱包</p>
            </template>
            <template #right-icon>
              <van-radio name="3" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="bottom-button">
      <van-button style="width: 100%" :hairline="false" round color="#0990FE">
        立即充值
      </van-button>
    </div>
    <div style="text-align: center">
      <span @click="toRecharge">
        充值记录查询
        <i class="iconfont icon-rightarrow"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const cardNumber = ref(122334556677723);
    const balance = ref(23);
    const radio = ref();
    const rechargeMoney = ref("20");
    const value = ref("");

    const router = useRouter();
    const close = () => {
      router.go(-1);
    };
    const toDetail = () => {
      router.push("/");
    };
    const toRecharge = () => {};

    return {
      close,
      toDetail,
      cardNumber,
      balance,
      radio,
      rechargeMoney,
      value,
      toRecharge,
    };
  },
};
</script>

<style lang="scss" scoped>
.rigth-top {
  color: #0990fe;
  font-size: 16px;
}
.traffic-card {
  width: 100%;
  height: 140px;
  background: url("../assets/img/card.png") no-repeat 0 0;
  background-size: contain;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-main {
  width: 100%;
  height: 100%;
  p {
    color: #ffffff;
  }
}
.card-left {
  width: 50%;
  justify-content: flex-start;
  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
}

.card-title {
  font-size: 15px;
  font-weight: 500;
}
.card-number {
  font-size: 10px;
}
.card-money {
  font-size: 18px;
  font-weight: 800;
}
.iconfont {
  font-size: 14px;
}
.recharge {
  padding: 14px;
  img {
    width: 20px;
    height: 20px;
  }
}
.recharge-title {
  font-size: 15px;
  text-align: left;
}
.recharge-money {
  margin-top: 10px;
  .van-button {
    width: 105px;
    // margin-right: 15px;
  }
}
.van-button--normal .van-cell {
  padding: 0 !important;
}
.pay-type {
  margin-left: 20px;
}
.bottom-button {
  margin-top: 30px;
  padding: 10px;
}
.select-recharge-money {
  background-color: rgba(9, 144, 254, 0.2);
  border: 1px solid #0990fe;
}
.other-money {
  border: 1px solid #3287f9;
}
</style>