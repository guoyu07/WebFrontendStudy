<template>
	<p>I am ComponentA!</p>
	<p>This msg is from my fater:</p>
	<!-- 直接就可以显示父亲说的话了 -->
	<p>{{msgfromfather}}</p>	
</template>
<script type="text/javascript">
export default {
  data () {
    return {
   		  
    }
  },
  props:['msgfromfather'],	// 在子组件中，也必须要接受到父亲传来的消息
  methods:{
  }    
}
</script>