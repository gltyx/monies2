	function disco(){
		$('#avatarUpgradeSpot:visible').toggle();
		$('#avatarPlace:visible').toggle();
		$('#convertBG:visible').toggle();
		$('#sacButton:visible').toggle();
		$('#discoBallID:hidden').toggle();
		$('#discoBGID:hidden').toggle();
		$('#discoBlackBox:hidden').toggle();
		$('#avatarUpgrades').css("background-image", "");
		$('#avatarUpgrades').css("background-size", "582px 697px");
		$('#avatarUpgrades').css("background-color", "yellow");
		$('#avatarUpgrades').css("animation-name", "discoFlash");
		$('#avatarUpgrades').css("animation-duration", "0.5s");
		$('#avatarUpgrades').css("animation-iteration-count", "infinite");
		$('#avatarUpgrades').css("animation-timing-function", "linear");
	}