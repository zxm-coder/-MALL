<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: ['蒙牛', '伊利', '君乐宝', '雀巢', '光明', '娃哈哈', '旺旺']
        },
        {
          tagName: '乳饮料',
          tags: ['酸酸乳', '优酸乳', '燕塘甜牛奶', '麦芽乳饮料', '乐怡', '营养快线']
        },
        {
          tagName: '酒水',
          tags: ['茅台', '洋河蓝色经典', '五粮液', '古井贡酒', '红花郎', '汾酒', '今世缘', '老白干', '二锅头', '其他']
        },
        {
          tagName: '调制品',
          tags: ['rio鸡尾酒', '哈瓦那', '百事可乐', '可口可乐', '雪花', '青岛', '红牛', '和其正', '王老吉']
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
