<template>
  <div class="box">
    <div class="nav">
      <ul class="detail">
        <li class="first" v-show="!userInfo.username">
        <router-link to="/login">登录</router-link> |<span class="text-color-red"><router-link to="/SignUp">注册</router-link></span>
        </li>
        <li v-show="!!userInfo.username">
          <Dropdown>
            <p class="username-p">
              <Avatar class="person-icon" icon="person" size="small" /> <span class="username">{{userInfo.username}} </span>
            </p>
            <DropdownMenu slot="list">
                <div class="my-page">
                  <div class="my-info" @click="myInfo">
                    <Icon type="home"></Icon>
                    <p>我的主页</p>
                  </div>
                  <div class="sign-out" @click="signOutFun">
                    <Icon type="log-out"></Icon>
                    <p>退出登陆</p>
                  </div>
                </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown  placement="bottom-start">
            <a href="javascript:void(0)">
              <router-link to="/login"><Icon type="ios-cart-outline"></Icon> 购物车</router-link>
            </a>
            <DropdownMenu slot="list">
              <div class="shopping-cart-null" v-show="shoppingCart.length <= 0">
                <Icon type="ios-cart-outline" class="cart-null-icon"></Icon>
                <span>你的购物车没有空空哦</span>
                <span>赶快去添加商品吧~</span>
              </div>
              <div class="shopping-cart-list" v-show="shoppingCart.length > 0">
                <div class="shopping-cart-box" v-for="(item,index) in shoppingCart" :key="index">
                  <div class="shopping-cart-img">
                    <img :src="item.img">
                  </div>
                  <div class="shopping-cart-info">
                    <div class="shopping-cart-title">
                      <p>{{item.title.substring(0, 22)}}...</p>
                    </div>
                    <div class="shopping-cart-detail">
                      <p>
                        套餐:
                        <span class="shopping-cart-text">
                          {{item.package}}
                        </span>
                        数量:
                        <span class="shopping-cart-text">
                          {{item.count}}
                        </span>
                        价钱:
                        <span class="shopping-cart-text">
                          {{item.price}}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="go-to-buy">
                  <Button type="error" size="small" @click="goToPay">
                    去结账
                  </Button>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li><router-link to="/">商城首页</router-link></li>
        <li><router-link to="/freeback">意见反馈</router-link></li>
        <!-- <li><router-link to="/">商城首页</router-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'M-Header',
  created () {
    this.isLogin();
  },
  computed: {
    ...mapState(['userInfo', 'shoppingCart'])
  },
  methods: {
    ...mapActions(['signOut', 'isLogin']),
    changeCity (city) {
      this.city = city;
    },
    goToPay () {
      this.$router.push('/order');
    },
    myInfo () {
      this.$router.push('/home');
    },
    signOutFun () {
      this.signOut();
      this.$router.push('/');
    }
  },
  store
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 35px;
  background-color: #fdd008;
}
.nav {
  margin-left: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: right;
  font-size: 14px;
  line-height: 35px;
  margin-right: 50px;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #998888;
  padding-left: 15px;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: #1b1919;
}
.location {
  color: #0f0c0c;
}
.icon {
  color: #0f0e0e;
}
.first {
  color: #1d1919;
}
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.city {
  padding: 10px 15px;
}
.city-item {
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
}
.city-item:hover {
  color: #d9534f;
}
.person-icon {
  color: #d9534f;
  background-color:  #f0cdb2;
}
.username {
  color: #999999;
}
.shopping-cart-list {
  padding: 3px 15px;
}
.shopping-cart-box {
  margin: 8px 0px;
  margin-top: 15px;
  padding-bottom: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px #ccc dotted;
}
.shopping-cart-box:first-child {
  margin-top: 8px;
}
.shopping-cart-img {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.shopping-cart-img img {
  width: 100%;
}
.shopping-cart-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 200px;
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
}
.shopping-cart-detail {
  color: #999999;
}
.shopping-cart-text {
  color: #ccc;
}
.go-to-buy {
  display: flex;
  justify-content: flex-end;
}
.shopping-cart-null {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart-null-icon {
  font-size: 38px;
  margin-bottom: 15px;
}
.shopping-cart-null span {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
}
.username-p {
  cursor: pointer;
}
.my-page {
  padding: 3px 5px;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-page a {
  margin: 0px;
  padding: 0px;
  border: none;
}
.my-info {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.my-info:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.my-info i {
  font-size: 28px;
}
.my-info p {
  font-size: 12px;
}
.sign-out {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.sign-out:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.sign-out i {
  font-size: 28px;
}
.sign-out p {
  font-size: 12px;
}
</style>
