$(document).ready(function(){
	var $window = $(window),
			$stressLevel = $('#stress-level'),
			$headerCollapse = $('#header-collapse'),
			stressTop = $stressLevel.offset().top + 100;
	if ($window.width() > 480) {
		$window.scroll(function(){
			if ($window.scrollTop() > stressTop) {
				$headerCollapse.fadeIn(500).removeClass('hidden');
			} else {
			$headerCollapse.fadeOut(500)
			}
		});
	}
});