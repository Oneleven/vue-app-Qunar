1. 生命周期钩子

![](https://ws4.sinaimg.cn/large/006tNc79gy1fsovvoku3jj31kw0d441q.jpg)

2. mvp $ mvvm

   - MVP：View视图层：负责显示

     ​            Presenter控制器：负责业务逻辑

     ​	    Model模型层：负责提供数据，一般是ajax请求返回的内容

     所有的业务交互逻辑都在控制器层，是视图层和模型层的中转站，其中大量的代码都是在操作dom。面向dom开发。

     ![](https://ws2.sinaimg.cn/large/006tNc79gy1fsovzjymzxj31ak0qkjx9.jpg)

   - MVVM：Model，View，ViewModel（vue负责）：编码的重点在model和view两个层面，不需要操作dom。面向数据开发。

3. 组件之间传值

   - 父组件——>子组件：通过绑定属性来传值。单项数据流，子组件不要去修改父组件的数据，可以通过在data里面赋值给一个变量，然后再更改变量。

     ⚠️组件里的data是一个函数data(){return { } }

     ```
     <ul>
     	<li is="todo" :content="item in items"></li>
     </ul>
     ---------
     Vue.component('todo',{
     	props:['content'],
         template:"<li>{{content}}</li>"
     })
     ```

   - 子组件 ——> 父组件：通过this.$emit('xxx',[prop])来给父组件传递事件，父组件通过v-on来监听xxx事件。

4. 列表渲染 

   - 遍历数组：v-for="(item, index) of items"

     //改变数组数据的方法

     - 直接改变引用
     - 变异方法push    pop    shift    unshift    splice    reserve    sort

     ```
     Vue.set(vm.userInfo, index, value) //实时地改变数组里的数据
     ```

   - 遍历对象：v-for="(value, key, index) of items"

     //改变对象数据的方法

     - 直接改变引用

     ```
     Vue.set(vm.userInfor, "address","beijing") //来给对象实时添加内容
     vm.$set(vm.userInfor, "address","beijing")
     ```

5. 操作dom， 通过ref="xxx"引用的方式

   ```
   <div id="app">
   	<div ref="hello" @click="handleClick"> hello </div>
   </div>
   -----
   var rm = new Vue({
       el:'#root,
       methods:{
           handleClick(){
               alert(this.$refs.hello.innerHtml)          //表示的是div的dom节点
           }
       }
   })
   ```

6. 组件参数校验与非props特性

   ```
   <child :content="123"></child>  //123是数字
   <child content="123"></child>   //这里的123是字符串
   -----
   Vue.component('child',{
       props:{
       	//content: String  
           //content:[Number,String]   数组
           content:{            //也可以是对象
               type: String,
               required:true,
               defalut: '默认值'，
               validator:(value)=>{
                   return value.length > 5   //通过函数来制定条件
               }
           }
       },
       template:'<div>{{content}}</div>'
   })
   ----------
   非prop特性：父组件里传值，子组件里不接收
   1. 子组件里无法使用值
   2. prop属性会显示在标签中
   ```

7. 给组件绑定原生事件 @click.native = "handleClick"。 只要在事件后面加.native就ojbk

8. 非父子组件之间的传值

   ```
   1. vueX
   2. bus/总线/发布订阅模式
   Vue.prototype.bus = new Vue
   ------
   <div id="app">
   	<child content="Tom"></child>
   	<child content="Jarry"></child>
   </div>
   -------
   Vue.prototype.bus = new Vue()
   
   Vue.component('child',{
   	props:{
           content:String
   	},
       template:'<div @click = "handleClick">{{content}}</div>',
       data(){
         return {
             selfContent = this.content
         }  
       },
       methods:{
           handleClick(){
               this.bus.$emit('change',this.selfContent)   //发布
           }
       },
       mounted:function(){
           this.bus.$on('change',(msg)=>{    //订阅
               this.selfContent = msg
           })
       }
   })
   
   var vm = new Vue({
       el:'#app'
   })
   ```

9. 使用插槽（slot）：

   ```
   <child>
   	<p slot="header"> hello </p>    //在子组件里直接插入dom元素
   	<p slot="footer"> world </p>
   </child>
   -----
   Vue.component('child',{
       template:`<div>
       			<slot name="header"> 默认内容 </slot>  //子组件中插入的内容
       			<article>content</article>
       			<slot name="footer"><slot>
       		</div>`
   })
   ```

10. \<template>\</template>：模板占位标签，不会显示在html代码里，但是有div的包裹效果。

11. 作用域插槽

    ```
    <div id="app">
    	<child>
    		<template slot-scope="content">  //使用插槽要使用template标签,并用slot-scope="content"接收传递的值
    			<li> {{content}} </li>
    		</template> 
    	</child>
    </div>
    
    -----------
    Vue.component('child',{
      template:'<ul><slot v-for="item of list" :content="item">  //这里也使用属性传递值
             <slot></ul>',   //<slot>标签就是父组件将要定义的标签名，如果是li,就是<ul><li></li></ul>
      data(){
        return{
          list:[1,2,3,4]
        }
      }
    })
    const vm = new Vue({
      el:'#app'
    })
    ```

12. 动态组件\<component  is="xxx">\</component>  和  v-once

    ```
    <div id="app">
    	<component :is="type"></component>
    	//<child-one v-if="type==='child-one'"></child-one>
    	//<child-two v-if="type==='child-two"></child-two>
    	<button @click="handleClick">change<button>
    </div>
    -------
    Vue.component('child-one',{
      //template:'<div v-once>child-one</div>'   //加了v-once之后性能较好，有缓存，不会频繁删除添加
      template:'<div>child-one</div>'
    })
    Vue.component('child-two',{
      //template:'<div v-once>child-two</div>'
      template:'<div>child-two</div>'
    })
    var vm = new Vue({
      el:'#app',
      methods:{
        handleClick(){
          this.type = this.type==='child-one'?'child-two':'child-one'
        }
      },
      data:{
        type:'child-one'
      }
    })
    ```

13. 动画过渡动画效果\<transition>

    - 进入动画：v-enter    ------>  v-enter-to

      ​		    v-enter-active 

    - 离开动画：v-leave   -------> v-leave-to

      ​		     v-leave-active

      ![](http://oqwgy1e36.bkt.clouddn.com/18-6-27/46160341.jpg)

      ![](http://oqwgy1e36.bkt.clouddn.com/18-6-27/87017011.jpg)

    ```
    动画效果用<transition name='fade'>包裹起来,写了name后动画名就变为fade-enter
    <transition name='fade'>
    	<div>123<div>
    </transition>
    -----css样式
    .fade-enter{
      opacity:0
    }
    .fade-enter-active{
      transition:opacity 3s    
    }
    ##//css,transition参数: property duration timing-function delay;
    ```

    ------

    使用Animate.css库 （:duration）

    ```
    ------<style>
    @keyframes flash{
      0%{
        transform:scale(0)
      }
      50%{
        transform:scale(1.5)
      }
      100%{
        transform:scale(1)
      }
    }
    .fade-enter-active{
      animation:flash 1s
    }
    ##animation: name duration timing-function delay iteration-count direction fill-mode play-state;
    --------可以自定义v-enter-active这些calss的名字
    <transition>
    	<div enter-active-class="animated swing"   //使用Animate.css的库，更改class名，后面加效果
    		 leave-active-class="animated shake"
    		 ##如果要在第一次进入页面的时候也有动画效果，使用appear
    		 appear
    		 appear-class="animated swing"
    	></div>
    </transition>
    
    -------如果过渡效果和Animate库相结合，那么在定义class的时候再定义一个fade-enter-active,然后在style样式中定义过渡动画
    <transition name="fade">
    	<div enter-class="animated swing fade-enter-active"
    		:duration='1000'  //动画和过渡相结合的时候，可以自定义动画时间，单位为ms
    		//type:'transition'  以过渡的时长为准
    		//:duration={enter:5000,leave:1000}
    	></div>
    </transition>
    ```

14. vue中元素或者组件的过渡

15. 单页应用和多页应用

    - 搜索引擎排名效果比较差。只能识别html文件，无法识别js文件。单页面内容是通过js渲染生成的。

    ![](https://ws4.sinaimg.cn/large/006tKfTcgy1fsqyodkvk8j31h60okdq9.jpg)

    ![](https://ws1.sinaimg.cn/large/006tKfTcgy1fsqyr47o8vj31fc0kidqa.jpg)

16. 项目初始化

    - reset.css文件

    - border.css：解决1像素问题。页面上写的是1个css逻辑像素，但是如果到高分屏中，1个css像素对应的可能是2个像素。

    - 移动端300ms点击事件：fastclick库: `npm install fastclick --save` 

      ```
      import fastClick from 'fastclick'
      fastClick.attach(document.body)
      ------
      npm i module_name -S 生产环境，发布时一起发布
      npm i module_name -D 开发环境
      npm i module_name -g 全局环境
      ```

17. iconfont：阿里图标项目

    [具体引用方法](https://blog.csdn.net/jyliyue/article/details/80466499)

18. css样式，使用stylus

    ```
    npm i stylus -S
    npm i stylus-loader -S
    ```

19. vue轮播插件 vue-awesome-swiper

    [github地址](https://github.com/surmon-china/vue-awesome-swiper)

    ⚠️配置轮播不同的配置选项 [awiper](http://3.swiper.com.cn/api/index.html) , 可以在data中定义

    ```
    swiperOption:{
                        pagination: '.swiper-pagination',
                        paginationType:'fraction'
                    }
    ```

    ⚠️当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，需要自动初始化swiper，否则会有bug，需要以下配置

    ```
     swiperOption:{
                        observeParents:true,
                        observer:true
                    }                    
    ```

    

20. 通过css来对图片未加载时用灰色背景div占位。ie盒模型时content+padding+border；当内容溢出到padding也是可以的。所以overflow:hidden不会影响到padding里的内容

    ```
    //#可以给wrapper添加一下css特性
    overflow:hidden;
    width:100%;
    height:0;
    padding-bottom:30%;
    background:#eee
    ----------
    或者直接写
    width:100%
    height:30vw
    ```

21. 把一个数组a[1,2,3,4,5,6,7,8,9]分成2个数组，并且内容最多8个

    ```
    var a = [1,2,3,4,5,6,7,8,9]
    function newarray(){
        var newarray = []
        a.forEach((item,index)=>{
            var page = Math.floor(index/8)
            if(!newarray[page]){
                newarray[page]=[]
            }
            newarray[page].push(item)
        })
        return newarray
    }
    ```

22. 通过axios来发送ajax请求`npm i axios -S`

    在主入口Home组件中去发送ajax请求

    ```
    import axios from 'axios'
    ---并在生命周期函数中的mounted中发送
    mounted(){
        
    }
    ```

23. 块级元素平等分布在同一行，并且中间有1像素的border

    ![](https://ws4.sinaimg.cn/large/006tNc79gy1fsvzyoncmvj30og06w0t0.jpg)

    ```
    在css中用calc()的计算方法,以及box-sizing:border-box ，以及:nth-child(3n-1)
    <ul>
     <li><a>北京</a></li>
     <li><a>上海</a></li>
     <li><a>西安</a></li>
    </ul>
    ```

24. vue的路由

    ```
    1. 可以使用<router-link to='/xxx'>标签来实现路由跳转
    2. 也可以调用this.$router.push('/xxx') 来实现页面跳转
    ```

25. css中块级元素绝对定位并且撑满整个画布

    ```
    position:fixed;
    left:0;
    bottom:0;
    top:0;
    right:0;
    background-color:#666   撑满了整个画布
    ```

26. 在vue组件中监听windows事件，比如window.addEventListener('scroll',xxx)，需要及时地解绑window.removeEventListener('scroll',xxx)，防止对整个页面产生负面影响



































































































