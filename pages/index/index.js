const app = getApp();
Page({
  onShareAppMessage: function () {
      return {
          title: '乐租松江',
          desc: '乐租松江'
      }
  },
  data: {
    userInfo: {},
    imgbx:{
      topImg:'/images/p1-top.png',
      titImg:'/images/p1-tit.png',
      bomImg:'/images/p1-bom.png'
    },
    button: {
      defaultSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    },
    houseType: ['一室户', '两室户'],
    houseTypeIndex: 0,
    inputContent: {}
  },
  onLoad () {
    let that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    })
  }, 
  bindPickerChange (e) {
    let _this  = this;
    _this.setData({
      houseTypeIndex: e.detail.value
    })
  },
  findHouse (e){
    let _this  = this;
    let _datas = 0;
    let _types = _this.data.houseTypeIndex;
    let _salary = _this.data.inputContent.currentSalary;

    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;

    if(typeof(_salary) == 'undefined' || !_salary){
       wx.showModal({
          title: '提示',
          content: '请输入当前月薪',
          showCancel:false
       });
       return false;
    }

    if(_types == 0 && _salary < 10000){
        _datas= 0;
    }
    else if(_types == 1 && _salary < 10000){
        _datas= 1;
    }
    else if(_types == 0 && _salary > 10000){
         _datas= 2;
    }
    else if (_types == 1 && _salary > 10000){
         _datas= 3;
    }

    wx.navigateTo({
      url: '../content/content?type='+_datas
    });
  },
  bindchangeInput (e) {
    this.data.inputContent[e.currentTarget.id] = e.detail.value;
  }

})
