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

### navbar部分和store
```
  navbar的opacity依赖存放在store里的opacity去改变navbar的透明度，opacity以属性porps的形式传入navbar绑定到内联样式里以达到依赖关系。
  betterscroll和navbar分别是两个封装组件，要实现两者的互动，我让betterscroll发起了对store里opacity和betterscroll差值的计算，得到最后的opacity。
  最后，计算后的opacity对navbar的透明度进行改变。
```
```
state: {  

        opacity: 0  
        
    },  
    
    mutations: {  
    
        listenOpa: (state,payload) => {  
        
            console.log(payload)  
            
            if(state.opacity < 0) {  
            
                return state.opacity = 0;  
                
            }
            else if(state.opacity > 1){  
            
                state.opacity = 1;   
                
            }  
            
            state.opacity += -payload;  
            
        },  
        
        zeroSet: (state) => {  
        
            state.opacity = 0;  
            
        }  
        
    },
```
### 注意
  ***需要注意得是每次切换tabbar时都要需要重置opacity为0。所以我在router.beraeach里把store里得opacity置零***
  ```
  router.beforeEach((to,from,next) => {    
  
      store.commit('zeroSet')  
      
      next();  
      
  })
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
