
Page({

  data: {
      data:[
          {'tittle':'商品分类','desc':'11111111'},
          {'tittle':'商品详情','desc':'22222222'},
          {'tittle':'售后保障','desc':'33333333'}
      ],
      changeColor:['now','',''],
      showDatil:[false,true,true]
  },


  onLoad (options) {

  },
  clickFun(ev){

    let index = ev.target.dataset.index;

    let changeColor = this.data.changeColor.map( val => "");
    let showDatil = this.data.showDatil.map(val => true);

    changeColor[index] = "now";
    showDatil[index] = false;

    this.setData({
      changeColor,
      showDatil
    })


  }
})