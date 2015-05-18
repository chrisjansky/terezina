$(function() {
	var $prohlizec = jQuery.browser.webkit ? "body" : "html";
	$('#hello a').click(function() {
		if ($(this).hasClass('aktivni')) {
			$('#hello a').removeClass('aktivni');
			$('#thumbs a').removeClass('neaktivni').removeClass('aktivni');
			$('#thumbs .filter').slideUp();
			return false;
		} else {
			$('#hello a').removeClass('aktivni');
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
		$('#hello a').removeClass('aktivni');
		$('#thumbs a').removeClass('neaktivni').removeClass('aktivni');
		$(this).slideUp();
	return false;
	});
	$(window).scroll(function() {
		setTimeout(function() {
			if ($($prohlizec).scrollTop() > $('section').offset().top) {
				if (!($("header").css('background-color') === "rgb(255, 255, 255)") && $('body').attr('id')===('projekt')) {
					$("header").animate({
						backgroundColor: "rgb(255, 255, 255)"
					}, "normal", function() {
						$("header").clearQueue();
					});
					$("a#logo h1").css('width','70px');
				}
				if ($('header').css('padding-top')===('59px')) {
					$('header').stop().animate({'padding-top': '28px'}, "normal");
				}
		} else if ($($prohlizec).scrollTop() < $('section').offset().top) {
			if (!($("header").css('background-color') === $barva) && $('body').attr('id')===('projekt')) {
				$("header").animate({
					backgroundColor: $barva
				}, "normal", function() {
					$("header").clearQueue();
				});
				$("a#logo h1").css('width','0px');
			}
			if ($('header').css('padding-top')===('28px')) {
				$('header').stop().animate({'padding-top': '59px'}, "normal");
			}
			}
		}, 500);
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
		$('section').isotope({
		  itemSelector : 'li',
		  masonry: {
		      columnWidth: 1
		    }
		});
		setTimeout(function() {
			if(location.hash.length > 1) {
				var target = window.location.hash+'-link';
				$('html,body').animate({scrollTop: $(target).offset().top+15}, "slow");
				$("a#logo h1").css('width','70px');
			}
		}, 500);
		setTimeout(function() {
			if ($($prohlizec).scrollTop() < $('section').offset().top) {
				$("header").animate({
					backgroundColor: $barva
				}, "normal" );
			}
		}, 1000);
	}
});