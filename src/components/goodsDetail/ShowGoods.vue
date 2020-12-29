<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="productLeft">
          <div class="item-detail-big-img" @click="showDetail(1)" @mouseleave="hideDetail(1)" @mouseover="showBigerImg(imgIndex)">
            <img :src="goodsInfo.goodsImg[imgIndex]" alt="">
          </div>
          <div v-show="isShow" class="marks" :style="{top:top+'px',left:left+'px'}"></div>
          <!-- 遮罩层 玻璃板 superMarks -->
          <div v-if="isPC==false" @touchstart.prevent="enter" @touchend.prevent="leave"  @touchmove.prevent="marks" @click.prevent="sub()" class="superMarks" ></div>
          <div v-if="isPC==true" @mouseenter="enter" @mouseleave="leave"  @mousemove="marks" @click.prevent="sub()" class="superMarks" ></div>
          <div v-show="isShow" class="lgImg">
            <img :src="goodsInfo.goodsImg[imgIndex]" alt="" :style="{top:topLgImg+'px',left:leftLgImg+'px'}">
        </div>
        </div>
        <div class="item-detail-img-row">
          <div class="item-detail-img-small" v-for="(item, index) in goodsInfo.goodsImg" :key="index" @mouseover="showBigImg(index)">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <span class="item-detail-express">校园配送</span> {{goodsInfo.title}}</p>
        </div>
        <div class="item-detail-tag">
          <p>
            <span v-for="(item,index) in goodsInfo.tags" :key="index">【{{item}}】</span>
          </p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">价格</span>
                <span class="item-price">￥{{price.toFixed(2)}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">优 惠 价</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.discount" :key="index">{{item}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.promotion" :key="index">{{item}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num">{{goodsInfo.remarksNum}} 条</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 选择颜色 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>选择规格</p>
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="(items, index) in goodsInfo.setMeal" :key="index">
              <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)" :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                <div class="item-select-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-select-intro">
                  <p>{{item.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCartBtn()">加入购物车</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name1: 'ShowGoods',
  name2: 'blog-header',
  props: {
    previewImg: {
      type: String,
      default: ''
    },
    zoomImg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isPC: true, // 大图片
      qall: '../../../static/img/goodsList/list-1.jpg',
      qallBig: '../../../static/img/goodsList/list-1.jpg',
      isShow: false, // 控制遮罩层marks和大图片是否显示"
      left: 0, // marks左移位置
      top: 0, // marks下移位置
      leftLgImg: 0, // 大图lgImg移动的位置
      topLgImg: 0, // 大图lgImg移动的位置
      panel1: false,
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0
    };
  },
  computed: {
    ...mapState(['goodsInfo']),
    hirePurchase () {
      const three = this.price * this.count / 3;
      const sex = this.price * this.count / 6;
      const twelve = this.price * this.count / 12 * 1.0025;
      const twentyFour = this.price * this.count / 24 * 1.005;
      return [
        {
          tooltip: '无手续费',
          type: '不分期'
        },
        {
          tooltip: '无手续费',
          type: `￥${three.toFixed(2)} x 3期`
        },
        {
          tooltip: '无手续费',
          type: `￥${sex.toFixed(2)} x 6期`
        },
        {
          tooltip: '含手续费：费率0.25%起，￥0.1起×12期',
          type: `￥${twelve.toFixed(2)} x 12期`
        },
        {
          tooltip: '含手续费：费率0.5%起，￥0.1起×12期',
          type: `￥${twentyFour.toFixed(2)} x 24期`
        }
      ];
    }
  },
  methods: {
    ...mapActions(['addShoppingCart']), // 鼠标进入和离开
    enter () {
      this.isShow = true;
    },
    leave () {
      this.isShow = false;
    },
    // 遮罩层放大
    marks (e) {
      var marksWidth = 48; // marks的宽
      var marksHeight = 48; // marks的高
      if (this.isPC === true) { // PC端
        this.left = e.offsetX - marksWidth / 2;
        this.top = e.offsetY - marksHeight / 2;
      } if (this.left < 0) {
        this.left = 0;
      } else if (this.left > 250) {
        this.left = 250;
      }
      if (this.top < 0) {
        this.top = 0;
      } else if (this.top > 250) {
        this.top = 250;
      } // 大d图片除以小的图片的宽高
      this.leftLgImg = -this.left * 500 / 450;
      this.topLgImg = -this.top * 500 / 450;
    },
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    },
    select (index1, index2) {
      this.selectBoxIndex = index1 * 3 + index2;
      this.price = this.goodsInfo.setMeal[index1][index2].price;
    },
    showBigImg (index) {
      this.imgIndex = index;
    },
    showBigerImg (imgIndex) {
      this.bigerimgIndex = imgIndex;
    },
    addShoppingCartBtn () {
      const index1 = parseInt(this.selectBoxIndex / 3);
      const index2 = this.selectBoxIndex % 3;
      const date = new Date();
      const goodsId = date.getTime();
      const data = {
        goods_id: goodsId,
        title: this.goodsInfo.title,
        count: this.count,
        package: this.goodsInfo.setMeal[index1][index2]
      };
      this.addShoppingCart(data);
      this.$router.push('/shoppingCart');
    }
  },
  mounted () {
    const father = this;
    setTimeout(() => {
      father.price = father.goodsInfo.setMeal[0][0].price || 0;
    }, 300);
  },
  store
};
</script>
<style scoped>
/******************商品图片及购买详情开始******************/
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.detail-big-img {
  width: 815px;
  height: 485px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 600px;
  z-index: 999;

}
.show-detail-big-img {
  width: 815px;
  height: 485px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 0.5px solid #e3393c;
}
.item-select-box-active {
  border: 0.5px solid #e3393c;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
.productLeft{
width:350px;
height:350px;
position: relative;
}
/* 左侧中图 */
.mdImg,.mdImg>img{
width:350px;
height:350px;
margin-left:0px;
}
/*遮罩层superMarks */
.superMarks{
width:350px;
height:350px;
background-color:rgba(220, 220, 220, 0);
position:absolute;
top:0px;
left:0px;

}
/* 遮罩层 */
.marks{
width:100px;
height:100px;
position:absolute;
background-color:rgba(220, 220, 220, 0.5);
/*top:0px;  //内联设置了动态的top，left
left:0px;*/
}

/* 左侧隐藏大图 */
.lgImg{
width:450px;
height:450px;
overflow: hidden;
position:absolute;
top:0px;
left:500px;
background-color:#fff;
}
.lgImg img{
width:450px;
height:450px;
position:absolute;
/*top:100px;
left:100px;*/
}
/******************商品图片及购买详情结束******************/
</style>
