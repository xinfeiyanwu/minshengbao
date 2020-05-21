<template>
  <div class="scan">
    <van-icon name="arrow-left" style="position:absolute;top: 0;left: 0;"/>
    <div id="bcid">
      <p class="tip">...载入中...</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        codeUrl: '',
        scan: null
      }
    },
    methods: {
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        this.scan = new plus.barcode.Barcode('bcid');
        this.scan.onmarked = onmarked;

        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          alert(result);
          that.closeScan();

        }
      },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        console.log(plus)
        this.scan.start();
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        this.scan.cancel();
      },
      //关闭条码识别控件
      closeScan() {
        if (!window.plus) return;
        this.scan.close();
      },
    },
    mounted(){
        this.startRecognize();
        this.startScan();
    }
  }
</script>
<style lang="less">
  .scan {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    #bcid {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        background: #ccc;
    }
  }
</style>