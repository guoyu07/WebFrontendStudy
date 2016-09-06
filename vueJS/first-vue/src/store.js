export default{
	fetch (){
		return JSON.parse(window.localStorage.getItem('vue-todo'))||[];
	},
	save (items) {
		window.localStorage.setItem('vue-todo',JSON.stringify(items));
	}
}