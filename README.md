# vanttest

## navtar配合betterscroll实现navbar背景隐藏显示的渐变效果
### betterscroll部分
```
利用betterscroll的scroll事件监听页面滚动的y轴距离(垂直距离)，然后把值传给store。
```
```
this.bs.on('scroll', (ev) => {    

   console.log(ev)  

    const posy = Math.abs(ev.y);  

    if(posy >= 0 && posy <= 80) this.$store.commit('listenOpa', posy);  

})
```

### navbar部分和store
```
   navbar的opacity(这里的opacity指的是background-color里rbga里的opacity)依赖存放在store里的opacity去改变navbar的透明度，opacity以属性porps的形式传入navbar绑定到内联样式里以达到依赖关系。
   根据navbar的opacity和opacity最大值1的比值等于这个距离和navbar的最大值比值计算出navbar的opacity，大概公式是:
   navbar的opacity/1=滚动的距离/可滚动的最大值(也就是navbar高的最大值)  

   ==> navbar的opacity=滚动的距离/可滚动的最大值(也就是navbar高的最大值) 

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
