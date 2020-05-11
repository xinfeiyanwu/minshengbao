# vanttest

## navtar配合betterscroll实现navbar背景隐藏显示的渐变效果
### betterscroll部分
```
利用betterscroll的scroll事件监听页面滚动的y轴距离(垂直距离)。
页面每次上下滚动都会产生差值(当前滚动的scroll - 上一次的scroll的值，但是有可能上次和这次的值相等，所以需要排除这种情况的出现)，
这个差值可以判断出上滑还是下滑，值得注意的是这个差值是正值时为上滑，负值为向下滑，因为在betterscroll里往下滑就是***负值***。
然后把这个差值缩小100倍，这是因为opacity值在0-1之间，scroll的值每次的差值都是大于1的。
```
```
this.bs.on('scroll', (ev) => {  

  const posy = ev.y;  
 
  let diff = 0;  
  
  //往下滑并且上一次的值和这次滑动的值不同  
  
  if(posy < 0 && this.prevPosy !== posy) {  
  
  diff = (posy-this.prevPosy)/100;  
  
    this.prevPosy=posy;  
    
    this.$store.commit('listenOpa', diff);  
    
  }  
  
})
```

### navbar部分
```
  
```


## Project setup
```
yarn install
```


### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
