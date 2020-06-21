<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" />
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div v-if="seller.supports" class="support-count">
          <span class="count">{{seller.supports.length}}</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>

  </div>
</template>

<script>
  //输出
  export default{
    props:{
      seller:{
        type: Object
      }
    },
    created(){
      this.classMap = ['decrease','discount','special','invoice','guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl";
  .header
    color : rgb(255,255,255)
    background-color : rgba(7,17,27,0.5)
    position :relative
    .content-wrapper
      padding : 24px 12px 18px 24px
      font-size : 0
      position :relative
      .avatar
        display : inline-block
        vertical-align : top
        img
          border-radius : 4px
      .content
        display : inline-block
        margin-left :16px
        .title
          margin: 2px 0 8px 0px
          .brand
            display : inline-block
            vertical-align :top
            width :30px
            height :18px
            bg-image('brand')
            background-size :30px 18px
            background-repeat :no-repeat
          .name
            display :inline-block
            vertical-align :top
            font-size :16px
            font-weight :bold
            line-height :18px
            margin-left :6px
        .description
          margin-bottom :10px
          font-size :12px
          line-height :12px
        .supports
          .icon
            display :inline-block
            width :12px
            height :12px
            background-color :red
            background-size :12px 12px
            background-repeat : no-repeat
            vertical-align :top
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.special
              bg-image('special_1')
            &.invoice
              bg-image('invoice_1')
          .text
            font-size :10px
            line-height :12px
            margin-left :4px
            vertical-align :top
      .support-count
        position :absolute
        right :12px
        bottom :14px
        height :24px
        padding :0 8px
        font-size :10px
        background-color : rgba(0,0,0,0.2)
        line-height :24px
        text-align :center
        border-radius :12px
        .count
          vertical-align :top
        .icon-keyboard_arrow_right
          margin-left :2px
          vertical-align :top
          line-height :24px
    .bulletin-wrapper
      position :relative
      height :28px
      background-color :rgba(7,17,27,0.2)
      padding :0 12px
      line-height :28px
      // ...显示
      white-space :nowrap
      overflow :hidden
      text-overflow :ellipsis
      .bulletin-title
        vertical-align :top
        display :inline-block
        width :22px
        height :12px
        margin-top :7px
        bg-image('bulletin')
        background-size :24px 12px
        background-repeat :no-repeat
      .bulletin-text
      vertical-align :top
        font-size :10px
        // line-height :28px
        margin: 0 4px
      .icon-keyboard_arrow_right
        font-size :10px
        position :absolute
        right :12px
        top:9px
    .background
      position :absolute
      top :0
      left :0
      width :100%
      height :100%
      z-index :-1
      filter :blur(10px)


</style>
