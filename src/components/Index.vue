<template>
  <div class="container">
    <Sreach></Sreach>
    <HomeNav></HomeNav>
    <!-- 商品显示区域 -->
    <div class="content">
      <!-- 秒杀 -->
      <!-- 服装与电脑专场 -->
      <div class="item-class-clothing">
        <div class="item-class-head item-class-clothing-head">
          <span class="item-class-title">{{computer.title1}}</span>
          <ul>
            <li v-for="(item, index) in computer.link1" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <!-- 加载服装图 -->
        <div class="item-class-content" v-for="(item, index) in computer.detailone" :key="index">
          <div class="item-content-top">
            <div class="item-big-img-clothing">
              <router-link to="/goodsList">
                <img :src="item.bigImg1" alt="">
              </router-link>
            </div>
            <div class="item-big-img-clothing">
              <router-link to="/goodsList">
                <img :src="item.bigImg2" alt="">
              </router-link>
            </div>
            <div class="item-big-img-clothing">
              <router-link to="/goodsList">
                <img :src="item.bigImg3" alt="">
              </router-link>
            </div>
            <div class="item-big-img-clothing">
              <router-link to="/goodsList">
                <img :src="item.bigImg4" alt="">
              </router-link>
            </div>
            <div class="item-big-img-clothing">
              <router-link to="/goodsList">
                <img :src="item.bigImg5" alt="">
              </router-link>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <电脑专场> -->
      <div class="item-class-computer">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title2}}</span>
          <ul>
            <li v-for="(item, index) in computer.link2" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <!-- 加载电脑图 -->
        <div class="item-class-content" v-for="(item, index) in computer.detailtwo" :key="index">
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 爱吃专场 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{eat.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content-eat" v-for="(item, index) in eat.detail" :key="index">
          <div class="item-content-top-eat">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sreach from '@/components/Sreach';
import HomeNav from '@/components/nav/HomeNav';
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Index',
  created () {
    this.loadSeckillsInfo();
    this.loadCarouselItems();
    this.loadComputer();
    this.loadEat();
    this.loadShoppingCart();
  },
  mounted () {
    const father = this;
    this.setIntervalObj = setInterval(function () {
      father.REDUCE_SECKILLS_TIME();
    }, 1000);
  },
  data () {
    return {
      setIntervalObj: null
    };
  },
  methods: {
    ...mapActions(['loadSeckillsInfo', 'loadCarouselItems', 'loadComputer', 'loadEat', 'loadShoppingCart']),
    ...mapMutations(['REDUCE_SECKILLS_TIME'])
  },
  computed: {
    ...mapState([ 'seckills', 'computer', 'eat' ]),
    ...mapGetters([ 'seckillsHours', 'seckillsMinutes', 'seckillsSeconds' ])
  },
  components: {
    Sreach,
    HomeNav,
    Footer
  },
  destroyed () {
    clearInterval(this.setIntervalObj);
  },
  store
};
</script>

<style scoped>
.container {
  background-color: #F6F6F6;
}
.content {
  width: 1008px;
  margin: 0px auto;
}
/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 470px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-clothing {
  width: 100%;
  height: 300px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-computer {
  width: 100%;
  height: 200px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-eat-head {
  background-color: #ecb226;
}
.item-class-clothing-head {
  background-color: #0cca45;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-clothing-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #1013be;
  border: 1px solid #339108;
  text-decoration: none;
  color: #fff;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #970e4e;
  border: 1px solid #991621;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 100%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.item-class-content-eat {
  width: 49%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height:210px;
}
.item-content-top-eat {
  width: 100%;
  height: 260px;
}
.item-big-img-clothing {
  width: 199px;
  height: 202px;
  overflow: hidden;
  float: left;
}
.item-big-img {
  width: 180px;
  height: 260px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 303px;
  margin-left: 8px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 152px;
  height: 130px;
  margin-left: -1px;
  float: left;
}
.item-four-detail:first-child {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.item-four-detail-text {
  width: 50px;
  margin-left: 5px;
  margin-top: 15px;
  float: left;
}
.item-four-detail-img {
  width: 96px;
  margin-top: 15px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #00695c;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
/*****************************商品专栏结束*****************************/
</style>
