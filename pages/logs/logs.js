import util from '../../utils/util.js' ;
Page({
  data: {
    around:{
        imgBussDistrict:'/images/bussDistrict.png',
        imgHospital:'/images/hospital.png',
        imgVegMarket:'/images/vegMarket.png',
        imgSupMarket:'/images/supMarket.png'
    },
    logs: [],
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
  onLoad(options) {
    
    /** */
  }
})
