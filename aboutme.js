function showstuff(id){
	const i = document.getElementById(id);
	var displayi = i.style.display;
	if(displayi == 'block'){
		i.style.display = 'none'
	}else{
		i.style.display = 'block'
	}
}