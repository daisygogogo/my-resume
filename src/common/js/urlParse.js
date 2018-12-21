export function urlParse(){
	let url = window.location.search; // ？x=3&y=6
	let obj = {}
	let regExp = /[?,&][^?&]+=[^?&]+/g
	let arr = url.match( regExp );
	if(arr){
		arr.forEach((item) =>{
			let temArr = item.substring(1).split('=');
			let key = decodeURIComponent(temArr[0]);
			let value = decodeURIComponent(temArr[1]);
			obj[key] = value;
		})
	}
	return obj;
};