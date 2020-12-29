// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/6.jpg',
        'static/img/nav/8.jpg',
        'static/img/nav/9.jpg',
        'static/img/nav/10.jpg',
        'static/img/nav/11.jpg'
      ],
      activity: [
        {
          daohangImag1: ['static/img/nav/nav_showimg1.jpg'
          ],
          daohangImag2: ['static/img/nav/nav_showimg2.jpg'
          ],
          daohangImag3: ['static/img/nav/12.jpg'
          ],
          daohangImag4: ['static/img/nav/13.jpg'
          ]
        }
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title1: '新潮服装',
      link1: ['西装', '羽绒服', '学生装', '春秋装', '童装'],
      detailone: [
        {
          bigImg1: [
            'static/img/index/computer/4-1.jpg'
          ],
          bigImg2: [
            'static/img/index/computer/4-2.png'
          ],
          bigImg3: [
            'static/img/index/computer/4-3.jpg'
          ],
          bigImg4: [
            'static/img/index/computer/4-4.png'
          ],
          bigImg5: [
            'static/img/index/computer/4-5.png'
          ]
        }
      ],
      title2: '电脑数码',
      link2: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '二合一平板', '电子教育'],
      detailtwo: [
        {
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg',
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '吃喝玩乐',
      link: ['休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒'],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};
// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/detail-1.jpg',
          'static/img/goodsDetail/detail-2.jpg',
          'static/img/goodsDetail/detail-3.jpg',
          'static/img/goodsDetail/detail-4.jpg'
        ],
        title: '新鲜日期，送货上门伊利纯牛奶/特仑苏/金典/谷粒多',
        tags: ['满69-20元', '次日达'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              intro: '伊利纯奶4盒',
              price: 28.0
            },
            {
              intro: '伊利纯奶1箱',
              price: 48
            },
            {
              intro: '特仑苏4盒',
              price: 28.5
            }
          ],
          [
            {
              intro: '特仑苏一箱',
              price: 48.5
            },
            {
              intro: '谷粒多4盒',
              price: 12.0
            },
            {
              intro: '谷粒多一箱',
              price: 42.0
            }
          ],
          [
            {
              intro: '金典4盒',
              price: 16.8
            },
            {
              intro: '金典1箱',
              price: 48.8
            },
            {
              intro: '金典+特仑苏+伊利纯奶+谷粒多各1箱',
              price: 188.8
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1-1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/1-2.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/1-3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/1-4.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/1-5.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/1-6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1-1.jpg',
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'iPhone 7手机壳'
          },
          {
            title: '商品编号',
            content: '10435663237'
          },
          {
            title: '店铺',
            content: 'Gavin Shop'
          },
          {
            title: '商品毛重',
            content: '100.00g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '机型',
            content: 'iPhone 7'
          },
          {
            title: '材质',
            content: 'PC/塑料'
          },
          {
            title: '款式',
            content: '软壳'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '很好喝，日期也不错！',
              goods: '特仑苏',
              create_at: '2020-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '很好喝，口感和线下的一样，第二次买了，以后还会买',
              goods: '谷粒多',
              create_at: '2020-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '好喝，孩子很喜欢，早上起来热也方便',
              goods: '金典',
              create_at: '2020-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好喝，味道和线下买的几乎一样，日期也非常的好',
              goods: '伊利纯牛奶',
              create_at: '2020-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '很好，不错不错，可以，以后再买',
              goods: '伊利一箱',
              create_at: '2020-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '还行吧，但是日期有点不好，以后再网上买还是小心点',
              goods: '谷粒多',
              create_at: '2020-08-19 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsList: [
          {
            img: 'static/img/goodsList/list-1.jpg',
            price: 10.00,
            intro: '天源牛奶，纯天然鲜奶',
            remarks: 6160,
            shopName: '元亨利乳品专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/list-2.jpg',
            price: 15.00,
            intro: '可爱奶杯，不烫手，实用型',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/list-3.jpg',
            price: 2.00,
            intro: '红牌果汁饮料，美味健康',
            remarks: 2800,
            shopName: '红牌果汁旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/list-4.jpg',
            price: 5.00,
            intro: '全脂纯牛奶，呵护健康',
            remarks: 9000,
            shopName: '歌乐力乳品专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/list-5.jpg',
            price: 4.20,
            intro: 'YOMO纯牛奶，纯天然，不添加',
            remarks: 6160,
            shopName: 'YOMO官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/list-6.jpg',
            price: 3.80,
            intro: '君乐宝鲜牛奶',
            remarks: 9006,
            shopName: '苏州君乐宝专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/list-7.jpg',
            price: 4.50,
            intro: '伊利纯牛奶',
            remarks: 8666,
            shopName: '伊利官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/list-8.jpg',
            price: 2.00,
            intro: '蒙牛马苏里',
            remarks: 6080,
            shopName: '武汉蒙牛专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/list-9.jpg',
            price: 5.50,
            intro: '三元红枣牛奶',
            remarks: 6160,
            shopName: '南京三元专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/list-10.jpg',
            price: 6.00,
            intro: '椰子牛奶饮品',
            remarks: 3000,
            shopName: 'YEIZi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/list-11.jpg',
            price: 1.25,
            intro: '最喜爱的牛奶冲剂',
            remarks: 2800,
            shopName: 'ZXM旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/list-12.jpg',
            price: 2.50,
            intro: '名媛香蕉牛乳，喝出健康',
            remarks: 9000,
            shopName: '名媛专营店',
            sale: 6360
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'Gavin',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '510000'
      },
      {
        addressId: '123458',
        name: 'Kevin',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '200120'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '4.7英寸-深邃蓝',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
