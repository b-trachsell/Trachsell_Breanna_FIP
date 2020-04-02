(() => {

	let hamburgerButton = document.querySelector("#hamburger"),
		Menu = document.querySelector("#hamburgerMenu");


	Menu.style.right= "-300px"; 


	function ShowhideMenu(){

		if (Menu.style.right == ("0px")){
			Menu.style.right = (`-300px`);
		}

		else{
			Menu.style.right = ("0px");
		}
	}

	hamburgerButton.addEventListener("click", ShowhideMenu);



})();