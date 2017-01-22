var Single = function(name) {
		this.name = name;
		this.instance = null;
	}
	//获取单例对象，这个是静态方法
	//注意这里不要挂到prototype上，因为次方法是获取单例的，并不需要先new对象出来
Single.getInstance = function(name) {
	if (!this.instance) {
		this.instance = new Single(name);
	}
	return this.instance;
}

//提示框属于典型的单利模式，因为大家公用一个对象即可
var CreateHint = (function() {
	//这是个静态变量
	var instance;
})