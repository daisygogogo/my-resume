export function saveToLocal(id, key,value){
	let seller = localStorage._seller_; //把所有值都存到这个seller里面，外层就用seller来获取值
	if(!seller){             // 最后的控制台打印的数据结构是这样的{_seller_: "{"113232323":{"favorite":true}}
		seller = {};
		seller[id] = {};
	}else{
		seller = JSON.parse(seller);
		if(!seller[id]){
			seller[id] = {};
		}
	}
	seller[id][key]=value;
	localStorage._seller_ = JSON.stringify(seller);

}
export function loadFromLocal(id, key,def){ // def是默认值
	let seller = localStorage._seller_;
	if(!seller){
		return def;
	}
	seller = JSON.parse(seller)[id];
	if(!seller) {
		return def;
	}
	let ret = seller[key];
	return ret || def;  // 还有或的表达法？ ||
	
}