// components/dv/dv.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    val:{
      type:String,
      value:"I Love You"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      this.triggerEvent('myevt',{ val: this.properties.val});
    }
  }
})
