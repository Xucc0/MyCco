// components/cc/cc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type:String,
      value:"cc"
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

    cc(){
      this.triggerEvent('mycc',{name:this.properties.name});
    }

  }
})
