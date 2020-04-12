(() => {

	let hamburgerButton = document.querySelector("#hamburger"),
		Menu = document.querySelector("#hamburgerMenu"),
		productS = document.querySelectorAll(".productSection"),
		popUp = document.querySelector("#productsPopUp"),
		bottleimage = document.querySelector("#bottlePopUp"),
		bottleName = document.querySelector("#productsName"),
		bottleSubtitle = document.querySelector("#productsSubtitle"),
		bottleBenefit1 = document.querySelector("#productsBenefit1"),
		bottleBenefit2 = document.querySelector("#productsBenefit2")

		;
	const productInfo = [

	["White Egg", "Laid by White Leghorn Hens.", "An excellent source of high quality protein to support muscles, skin, bones and the immune system. Easily Packaged to take on the go.","One of the best value-for-money protein sources available."],
	["Brown Egg", "Laid by Rhode Island Red Hens.", "An excellent source of high quality protein to support muscles, skin, bones and the immune system. Easily Packaged to take on the go.","One of the best value-for-money protein sources available." ],
	["Omega-3 Enriched", "Laid by hens fed a diet that includes flaxseed, a rich source of omega-3 fatty acids." , "Omega-3 polyunsaturates help to improve heart health by slightly lowering blood pressure."],
	["Free Range Egg", "Laid by hens living in open concept barns.", "Access to outdoor pastures allows hens to express natural behaviours like eating insects and pecking in the dirt."],



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

	function showProductPopUp(){
		console.log("die");
		popUp.classList.add("openPopUp");
		debugger;

	}

	hamburgerButton.addEventListener("click", ShowhideMenu);
	productS.forEach(section =>{
		addEventListener("click", showProductPopUp);

	});




})();