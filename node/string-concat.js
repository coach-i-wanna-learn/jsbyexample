let arr = [];
//数组有若干字符串
for(let i=0;i<100000;i++){
	arr.push(i+'A');
}
 
//性能计算原理
//主要看同样遍历次数下时间消耗对比
function add1(){
	let str = null;
	let start_time = new Date().getTime();
	for(let i = 0,len = arr.length;i<len;i++){
		str += arr[i];				//使用+=拼接
	}
	let end_time = new Date().getTime();
	console.log('add1',(end_time - start_time).toString());
}
 
 
function add2(){
	let str = null;
	let start_time = new Date().getTime();
	for(let i = 0,len = arr.length;i<len;i++){
		str = str + arr[i];			//常规+拼接
	}
	let end_time = new Date().getTime();
	console.log('add2',(end_time - start_time).toString());
}
 
function add3(){
	let str = null;
	let start_time = new Date().getTime();
	for(let i = 0,len = arr.length;i<len;i++){
		str = `${str}${arr[i]}`;	//ES6字符串模板方法
	}
	let end_time = new Date().getTime();
	console.log('add3',(end_time - start_time).toString());
}
 
add1();
add2();
add3();