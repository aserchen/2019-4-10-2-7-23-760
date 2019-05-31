module.exports = function main(inputs) {
    // write your code here...
	var price=0;
	if(inputs['distance']>=8){
		price = 6+ 4.8 +1.2*(inputs['distance']-8);
	}else if(inputs['distance']>=2){
		price = 6+ 0.8*(inputs['distance']-2);
	}else{
		price = 6;
	}
	
	price += inputs['parkTime']*0.25;
    return Math.round(price);
};
