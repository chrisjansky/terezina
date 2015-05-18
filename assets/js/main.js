$(function() {
	$('#home h2 a').click(function() {
		if ($(this).hasClass('aktivni')) {
			$('#home h2 a').removeClass('aktivni');
			$('#thumbs a').removeClass('neaktivni').removeClass('aktivni');
			$('#thumbs .filter').slideUp();
			return false;
		} else {
			$('#home h2 a').removeClass('aktivni');
			$(this).addClass('aktivni');
				if ($('#thumbs .filter').css('display')===('none')) {
					$('#thumbs .filter').slideDown();
				}
		}
		if ($(this).hasClass('produkt')) {
			$('#thumbs .filter').text("Zvýrazněny práce produktového designu");
			$('#thumbs a.produkt').removeClass('neaktivni').addClass('aktivni');
			$('#thumbs a.obal').removeClass('aktivni').addClass('neaktivni');
			$('#thumbs a.grafika').removeClass('aktivni').addClass('neaktivni');
		} else if ($(this).hasClass('obal')) {
			$('#thumbs .filter').text("Zvýrazněny práce obalového designu");
			$('#thumbs a.produkt').removeClass('aktivni').addClass('neaktivni');
			$('#thumbs a.obal').removeClass('neaktivni').addClass('aktivni');
			$('#thumbs a.grafika').removeClass('aktivni').addClass('neaktivni');
		} else if ($(this).hasClass('grafika')) {
			$('#thumbs .filter').text("Zvýrazněny práce grafického designu");
			$('#thumbs a.produkt').removeClass('aktivni').addClass('neaktivni');
			$('#thumbs a.obal').removeClass('aktivni').addClass('neaktivni');
			$('#thumbs a.grafika').removeClass('neaktivni').addClass('aktivni');
		}
	return false;
	});
	$('#thumbs .filter').click(function() {
		$('#home h2 a').removeClass('aktivni');
		$('#thumbs a').removeClass('neaktivni').removeClass('aktivni');
		$(this).slideUp();
	return false;
	});
	if ($('body').attr('id')===('projekt')) {
		var $barva;
		if ($('body').hasClass('produkt')) {
			$barva = '#f355ae';
		} else if ($('body').hasClass('grafika')) {
			$barva = '#d4c7be';
		} else {
			$barva = '#47bcff';
		}
		setTimeout(function() {
			$("header").animate({backgroundColor: $barva}, "normal");
		}, 1000);
		$('section').isotope({
		  itemSelector : 'li',
		  masonry: {
		      columnWidth: 1
		    }
		});
		setTimeout(function() {
			if(location.hash.length > 1) {
				var target = window.location.hash+'-link';
				$('html,body').animate({scrollTop: $(target).offset().top-20}, "slow");
			}
		}, 500);
	}
});