<template>
  <div id="app">    
    <p>
      This is a todo-list!
    </p>
    <p>
      <input type="text" @keyup.enter="addItem" v-model='item'>
      <ul>
        <li v-for="item in items" @click="traggleState(item)" :class="{listDone:item.status}" v-text="item.text"></li>
      </ul>
      <!-- 组件中驼峰命名会转成小写并且带中横线 -->
      <component-a msgfromfather='good boy!'></component-a>
    </p>    
  </div>
</template>

<script>
import Store from './store.js';
import ComponentA from './components/componentA'

export default {
  data () {
    return {
      items: Store.fetch(), // 这里是个数组
      item: ''              // 这个模型用来添加数据
    }
  },
  components:{    // 这里必须要注册使用的组件，然后页面中才能使用这个组件
    ComponentA
  },
  methods:{
    traggleState: function(item){
      item.status = !item.status; // 数据绑定也可以通过数组循环中对象双向绑定
    },
    addItem: function(){
      this.items.push({   // 先动态绑定数据，
        text: this.item,
        status: false
      });
      this.item = '';
      Store.save(this.items); // 然后保存到本地文件中
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.listDone{
  text-decoration: underline;
  color: red;
}
</style>