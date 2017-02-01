Page({
  data: {
    bottomNav:{
        normal:[
            '/images/nav/recommend.png',
            '/images/nav/station.png',
            '/images/nav/traffic.png',
            '/images/nav/around.png',
            '/images/nav/order.png'
        ],
        bigs:[
            '/images/nav/recommend-big.png',
            '/images/nav/station-big.png',
            '/images/nav/traffic-big.png',
            '/images/nav/around-big.png',
            '/images/nav/order-big.png'
        ]
    },
    navScr:[],
    navText:['推荐小区','概况','交通','周边','治安'],
    navClass:[ 'navClassBig','navClass','navClass','navClass', 'navClass'],
    displayStyle:[],
    recommend:{
        imgbx:{
            tipsImg:'/images/tips.png'
        }
    },
    station:{
        topImg:'/images/p2-top.png'
    },
    traffic:{
        imgCar:'/images/taxi.png',
        imgBus:'/images/bus.png',
        imgSubway:'/images/subway.png',
        fromTo:'/images/fromTo.png',
        longitude:121.436434,
        latitude:31.195109,
        scale:13,
        markers:[{
            iconPath: "/images/mapStart.png",
            id: 0,
            latitude: 31.186959,
            longitude: 121.424117,
            width: 50,
            height: 50
        },{
            iconPath: "/images/mapEnd.png",
            id: 1,
            latitude: 31.195109,
            longitude: 121.436434,
            width: 50,
            height: 50
        }]
    },
    around:{
        imgBussDistrict:'/images/bussDistrict.png',
        imgHospital:'/images/hospital.png',
        imgVegMarket:'/images/vegMarket.png',
        imgSupMarket:'/images/supMarket.png'
    },
    order:{
        imgSign:'/images/sign.png',
        imgStar:'/images/star.png',
        imgStarbg:'/images/starbg.png',
        imgMonitor:'/images/monitor.png',
        imgSecurity:'/images/security.png',
        imgLi:'/images/li.png'
    },
    slideAnimation: {},
    currentIndex:0,
    globDatas:{},
  },
  onLoad (options) {
        let _this = this;
        let num = 0 ;
        
        _this.setnavData(num);

        wx.request({
            url: 'https://api.getweapp.com/vendor/rent',
            success: (res) => {
                _this.setData({
                    globDatas:res.data.datas[options.type || 0]
                });
            }
        })
    
        
  },
  navPress (event) {
      let _this = this;
      let num = event.currentTarget.dataset.numbers;

      if(_this.data.currentIndex == num){
          return false;
      }

      _this.setnavData(num);
      
    //   _this.animateSwipt();       
      
  },
  animateSwipt (){
       let _this = this;

       let animation = wx.createAnimation({
            duration:0
        });

        animation.translateX('110%').step();
        _this.setData({
            slideAnimation: animation.export()
        });

        setTimeout(function(){
            animation.translateX('0').step({ duration: 500 });
            _this.setData({
                slideAnimation: animation.export()
            });
        },100);
  },
  setnavData(num){
        let _this = this;
        let _arr= [],
            _displayStyle =[],
            _class=[];
        for(let i = 0; i <= 4 ; i++){
            if( i == num ){
                _arr[i] = _this.data.bottomNav.bigs[i];
                _class[i] = 'navClassBig';
                _displayStyle[i]="blocks";
            }else{
                _arr[i] = _this.data.bottomNav.normal[i];
                _class[i] = 'navClass';
                _displayStyle[i]="";
            }
        }
        _this.setData({
            navScr:_arr,
            navClass:_class,
            displayStyle:_displayStyle,
            currentIndex:num
       });
  }
})