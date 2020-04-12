(() => {

	let hamburgerButton = document.querySelector("#hamburger"),
		Menu = document.querySelector("#hamburgerMenu"),
		productS = document.querySelectorAll(".productSection"),
		popUp = document.querySelector(".productsPopUp"),
		popBG = document.querySelector(".popUpBG"),
		bottleimage = document.querySelector("#bottlePopup"),
		bottleName = document.querySelector("#productsName"),
		bottleSubtitle = document.querySelector("#productsSubtitle"),
		bottleBenefit1 = document.querySelector("#benefit1"),
		bottleBenefit2 = document.querySelector("#benefit2"),
		submitButton = document.querySelector("#submitButton"),
		thankYou = document.querySelector(".thankyou")
		;
	const productInfo = [

	["White Egg", "Laid by White Leghorn Hens.", "An excellent source of high quality protein to support muscles, skin, bones and the immune system. Easily Packaged to take on the go.","One of the best value-for-money protein sources available.", "White" ],
	["Brown Egg", "Laid by Rhode Island Red Hens.", "An excellent source of high quality protein to support muscles, skin, bones and the immune system. Easily Packaged to take on the go.","One of the best value-for-money protein sources available.", "Brown" ],
	["Omega-3 Enriched", "Laid by hens fed a diet that includes flaxseed, a rich source of omega-3 fatty acids." , "Omega-3 polyunsaturates help to improve heart health by slightly lowering blood pressure.","" ,"Omega3"],
	["Free Range Egg", "Laid by hens living in open concept barns.", "Access to outdoor pastures allows hens to express natural behaviours like eating insects and pecking in the dirt.","" ,"FreeR"],



	];


	Menu.style.right= "-300px"; 


	function ShowhideMenu(){

		if (Menu.style.right == ("0px")){
			Menu.style.right = (`-300px`);
		}

		else{
			Menu.style.right = ("0px");
		}
	}

	function HidesubmitButton(){
		submitButton.classList.add("hideSubmit");
		thankYou.classList.remove("thankyou");
	}

	function showProductPopUp(){
		popUp.classList.remove("hidePopUp");
		popBG.classList.remove("hidePopUp");
		console.log(this.dataset.product);
		bottleimage.src = (`images/bottle${productInfo[this.dataset.product][4]}.png`);
		bottleName.textContent = (`${productInfo[this.dataset.product][0]}`);
		bottleSubtitle.textContent = (`${productInfo[this.dataset.product][1]}`);
		bottleBenefit1.textContent = (`${productInfo[this.dataset.product][2]}`);
		bottleBenefit2.textContent = (`${productInfo[this.dataset.product][3]}`);

	}

	function hideProductPopUp(){
		popUp.classList.add("hidePopUp");
		popBG.classList.add("hidePopUp");
	}

	hamburgerButton.addEventListener("click", ShowhideMenu);
	if (submitButton) {
	submitButton.addEventListener("click", HidesubmitButton);
	}
	if (popBG) {
		popBG.addEventListener("click",hideProductPopUp);
	}
	productS.forEach(section =>{
		section.addEventListener("click", showProductPopUp);

	});




})();