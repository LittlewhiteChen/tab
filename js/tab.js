
// 这个选择符现在原生的也支持  document.getElementsByClassName("");
function getByClass(oParent, sClass) {
	var arr = [];
	var aElement = oParent.getElementsByTagName('*');

	for (var i = 0; i < aElement.length; i++) {
		if (aElement[i].className == sClass) {
			arr.push(aElement[i]);
		}
	}
	return arr;
}
window.onload = function() {
	var oUlLeft = getByClass(document, 'left')[0];
	var oDivRight = getByClass(document, 'right')[0];
	var aLiLeft = oUlLeft.getElementsByTagName('li');
	var aUlTab = oDivRight.getElementsByTagName('ul');
	var oImg = oDivRight.getElementsByTagName('img')[0];
	var num = 0;

	for (var i = 0; i < aLiLeft.length; i++) {
		aLiLeft[i].index = i;
		aLiLeft[i].onclick = function show() {
			for (var i = 0; i < aLiLeft.length; i++) {
				aLiLeft[i].className = '';
				aUlTab[i].style.display = 'none';
			}
			num = this.index;
			oImg.src = 'img/' + (num + 1) + '-1.png';
			aLiLeft[this.index].className = 'active';
			aUlTab[this.index].style.display = 'block';
		};
	}
	for (var i = 0; i < aUlTab.length; i++) {
		tabPic(aUlTab[i]);
	}

	function tabPic(oUlTab) {
		var aA = oUlTab.getElementsByTagName('a');
		for (var i = 0; i < aA.length; i++) {
			aA[i].index = i;
			aA[i].onmouseover = function() {
				for (var i = 0; i < aA.length; i++) {
					aA[i].className = '';
				}
				oImg.src = 'img/' + (num + 1) + '-' + (this.index + 1) + '.png';
				aA[this.index].className = 'active';
			};
		}
	}
};