<template>
  <div class="HeadLine" :_height="_height" :style="{'height': _height+'px'}">
    <div class="HeadLineBox">
      <img src="@/assets/img/common/left-icon.png" alt="left-icon.png">
      <div class="slot" :fontSize="fontSize" :style="{'font-size': fontSize+'px'}">
          <slot></slot>
      </div>
      <img src="@/assets/img/common/right-icon.png" alt="right-icon.png">
    </div>
  </div> 
</template>

<script>
export default {
    name: "HeadLine",
    props: {
      _height: {
        type: Number,
        default: 40
      },
      fontSize: {
        type: Number,
        default: 18
      }
    }
}
</script>

<style lang="less" scoped>
.HeadLine{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .HeadLineBox{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    color: #f4623b;
    font-size: 18px;
    .slot{
      padding: 0 10px;
    }
    img{
      width: 60px;
    }
  }
}
</style>


