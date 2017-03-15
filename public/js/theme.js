/*------------------------------------------------------------------
[Table of contents]

- Author:  Andrey Sokoltsov
- Profile:	http://themeforest.net/user/andreysokoltsov
--*/

(function() {

	"use strict";
   
            var items = [
                ["2000@1", 311], ["2000@2", 621], ["2000@3", 932], ["2000@4", 1243], ["2000@5", 1553],
                ["2000@6", 1592], ["2000@7", 1631], ["2000@8", 1942], ["2000@9", 2252], ["2000@10", 2563],
                ["2000@11", 2873], ["2000@12", 3184], ["2000@13", 3223], ["2000@14", 3262], ["2000@15", 3572],
                ["2000@20", 5126], ["2000@25", 6135], ["2000@30", 7145],

                ["4000@1", 332], ["4000@2", 664], ["4000@3", 997], ["4000@4", 1329], ["4000@5", 1661],
                ["4000@6", 1703], ["4000@7", 1744], ["4000@8", 2076], ["4000@9", 2408], ["4000@10", 2741],
                ["4000@11", 3073], ["4000@12", 3405], ["4000@13", 3447], ["4000@14", 3488], ["4000@15", 3820],
                ["4000@20", 5481], ["4000@25", 6561], ["4000@30", 7641],

                ["6000@1", 341], ["6000@2", 682], ["6000@3", 1023], ["6000@4", 1364], ["6000@5", 1705],
                ["6000@6", 1748], ["6000@7", 1791], ["6000@8", 2132], ["6000@9", 2473], ["6000@10", 2814],
                ["6000@11", 3155], ["6000@12", 3496], ["6000@13", 3539], ["6000@14", 3581], ["6000@15", 3922],
                ["6000@20", 5628], ["6000@25", 6736], ["6000@30", 7844],

                ["8000@1", 350], ["8000@2", 700], ["8000@3", 1050], ["8000@4", 1400], ["8000@5", 1750],
                ["8000@6", 1793], ["8000@7", 1837], ["8000@8", 2187], ["8000@9", 2537], ["8000@10", 2887],
                ["8000@11", 3237], ["8000@12", 3587], ["8000@13", 3631], ["8000@14", 3674], ["8000@15", 4024],
                ["8000@20", 5774], ["8000@25", 6911], ["8000@30", 8048],

                ["10000@1", 367], ["10000@2", 734], ["10000@3", 1100], ["10000@4", 1467], ["10000@5", 1834],
                ["10000@6", 1880], ["10000@7", 1925], ["10000@8", 2292], ["10000@9", 2659], ["10000@10", 3026],
                ["10000@11", 3392], ["10000@12", 3759], ["10000@13", 3805], ["10000@14", 3851],
                ["10000@15", 4218], ["10000@20", 6051], ["10000@25", 7243], ["10000@30", 8435],

                ["12000@1", 396], ["12000@2", 792], ["12000@3", 1187], ["12000@4", 1583], ["12000@5", 1979],
                ["12000@6", 2028], ["12000@7", 2078], ["12000@8", 2474], ["12000@9", 2869], ["12000@10", 3265],
                ["12000@11", 3661], ["12000@12", 4057], ["12000@13", 4106], ["12000@14", 4156], ["12000@15", 4551],
                ["12000@20", 6530], ["12000@25", 7817], ["12000@30", 9103],

                ["14000@1", 420], ["14000@2", 840], ["14000@3", 1260], ["14000@4", 1680], ["14000@5", 2101],
                ["14000@6", 2153], ["14000@7", 2206], ["14000@8", 2626], ["14000@9", 3046], ["14000@10", 3466],
                ["14000@11", 3886], ["14000@12", 4306], ["14000@13", 4359], ["14000@14", 4411], ["14000@15", 4831],
                ["14000@20", 6932], ["14000@25", 8297], ["14000@30", 9663],

                ["16000@1", 444], ["16000@2", 889], ["16000@3", 1333], ["16000@4", 1778], ["16000@5", 2222],
                ["16000@6", 2278], ["16000@7", 2333], ["16000@8", 2778], ["16000@9", 3222], ["16000@10", 3667],
                ["16000@11", 4111], ["16000@12", 4556], ["16000@13", 4611], ["16000@14", 4667], ["16000@15", 5111],
                ["16000@20", 7334], ["16000@25", 8778], ["16000@30", 10222],

                ["18000@1", 503], ["18000@2", 1005], ["18000@3", 1508], ["18000@4", 2011], ["18000@5", 2514],
                ["18000@6", 2576], ["18000@7", 2639], ["18000@8", 3142], ["18000@9", 3645], ["18000@10", 4147],
                ["18000@11", 4650], ["18000@12", 5153], ["18000@13", 5216], ["18000@14", 5279], ["18000@15", 5781],
                ["18000@20", 8295], ["18000@25", 9929], ["18000@30", 11562],

                ["20000@1", 565], ["20000@2", 1131], ["20000@3", 1696], ["20000@4", 2261], ["20000@5", 2827],
                ["20000@6", 2897], ["20000@7", 2968], ["20000@8", 3533], ["20000@9", 4099], ["20000@10", 4664],
                ["20000@11", 5229], ["20000@12", 5795], ["20000@13", 5865], ["20000@14", 5936], ["20000@15", 6501],
                ["20000@20", 9328], ["20000@25", 11165], ["20000@30", 13003],

                ["24000@1", 610], ["24000@2", 1219], ["24000@3", 1829], ["24000@4", 2439], ["24000@5", 3048],
                ["24000@6", 3125], ["24000@7", 3201], ["24000@8", 3811], ["24000@9", 4420], ["24000@10", 5030],
                ["24000@11", 5640], ["24000@12", 6249], ["24000@13", 6326], ["24000@14", 6402], ["24000@15", 7011],
                ["24000@20", 10060], ["24000@25", 12041], ["24000@30", 14023],

                ["28000@1", 654], ["28000@2", 1309], ["28000@3", 1963], ["28000@4", 2618], ["28000@5", 3272],
                ["28000@6", 3354], ["28000@7", 3436], ["28000@8", 4090], ["28000@9", 4745], ["28000@10", 5399],
                ["28000@11", 6053], ["28000@12", 6708], ["28000@13", 6790], ["28000@14", 6871], ["28000@15", 7526],
                ["28000@20", 10798], ["28000@25", 12925], ["28000@30", 15052],

                ["32000@1", 699], ["32000@2", 1398], ["32000@3", 2097], ["32000@4", 2797], ["32000@5", 3496],
                ["32000@6", 3583], ["32000@7", 3671], ["32000@8", 4370], ["32000@9", 5069], ["32000@10", 5768],
                ["32000@11", 6467], ["32000@12", 7166], ["32000@13", 7254], ["32000@14", 7341], ["32000@15", 8040],
                ["32000@20", 11536], ["32000@25", 13808], ["32000@30", 16081],

                ["36000@1", 764], ["36000@2", 1528], ["36000@3", 2293], ["36000@4", 3057], ["36000@5", 3821],
                ["36000@6", 3916], ["36000@7", 4012], ["36000@8", 4776], ["36000@9", 5540], ["36000@10", 6305],
                ["36000@11", 7069], ["36000@12", 7833], ["36000@13", 7928], ["36000@14", 8024], ["36000@15", 8788],
                ["36000@20", 12609], ["36000@25", 15093], ["36000@30", 17576],

                ["40000@1", 863], ["40000@2", 1726], ["40000@3", 2590], ["40000@4", 3453], ["40000@5", 4316],
                ["40000@6", 4424], ["40000@7", 4532], ["40000@8", 5395], ["40000@9", 6258], ["40000@10", 7121],
                ["40000@11", 7985], ["40000@12", 8848], ["40000@13", 8956], ["40000@14", 9064], ["40000@15", 9927],
                ["40000@20", 14243], ["40000@25", 17048], ["40000@30", 19853],

                ["45000@1", 962], ["45000@2", 1924], ["45000@3", 2887], ["45000@4", 3849], ["45000@5", 4811],
                ["45000@6", 4931], ["45000@7", 5052], ["45000@8", 6014], ["45000@9", 6976], ["45000@10", 7938],
                ["45000@11", 8900], ["45000@12", 9863], ["45000@13", 9983], ["45000@14", 10103], ["45000@15", 11065],
                ["45000@20", 15876], ["45000@25", 19003], ["45000@30", 22131],
                ["50000@1", 1071], ["50000@2", 2142], ["50000@3", 3213], ["50000@4", 4285], ["50000@5", 5356],
                ["50000@6", 5490], ["50000@7", 5624], ["50000@8", 6695], ["50000@9", 7766], ["50000@10", 8837],
                ["50000@11", 9908], ["50000@12", 10979], ["50000@13", 11113], ["50000@14", 11247], ["50000@15", 12318],
                ["50000@20", 17674], ["50000@25", 21155], ["50000@30", 24637],

                ["60000@1", 1295], ["60000@2", 2590], ["60000@3", 3884], ["60000@4", 5179], ["60000@5", 6474],
                ["60000@6", 6636], ["60000@7", 6798], ["60000@8", 8092], ["60000@9", 9387], ["60000@10", 10682],
                ["60000@11", 11977], ["60000@12", 13271], ["60000@13", 13433], ["60000@14", 13595], ["60000@15", 14890],
                ["60000@20", 21364], ["60000@25", 25572], ["60000@30", 29780],

                ["75000@1", 2053], ["75000@2", 4105], ["75000@3", 6158], ["75000@4", 8210], ["75000@5", 10263],
                ["75000@6", 10519], ["75000@7", 10776], ["75000@8", 12828], ["75000@9", 14881], ["75000@10", 16933],
                ["75000@11", 18986], ["75000@12", 21038], ["75000@13", 21295], ["75000@14", 21552], ["75000@15", 23604],
                ["75000@20", 33867], ["75000@25", 40538], ["75000@30", 47208]
            ];


        function addDigitGrouping(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
		
	var Core = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();

		},

		build: function() {

			//Placeholder for IE
			$('input, textarea').placeholder();
			
			// Dropdown menu
			this.dropdownhover();
			
			// Page preloader
			this.initPagePreloader();
			
			// Equal Height
			this.setEqualHeight();
			
			// Sliders
			this.initMileageSlider();
			this.initPriceSlider();
			this.initListPriceSlider();
			this.initListDaysSlider();
			
			//Setup WOW.js
			this.initScrollAnimations();

			// Owl Carousel
			this.initOwlCarousel();
			
			// bxSlider
			this.initBxSlider();
			
			// Tabs
			this.initTabs();
			
			// Collapse Blocks
			this.initCollapsible();
			
			// Counter
			this.initNumberCounter();
			
			// Go to top
			this.initGoToTop();
			
			
		},

		dropdownhover: function(options) {
			/** Extra script for smoother navigation effect **/
			if ($(window).width() > 798) {
				$('.navbar-main-slide').on('mouseenter', '.navbar-nav-menu > .dropdown', function() {
					"use strict";
					$(this).addClass('open');
				}).on('mouseleave', '.navbar-nav-menu > .dropdown', function() {
					"use strict";
					$(this).removeClass('open');
				});
			}
		},

		initPagePreloader: function(options) {
			var $preloader = $('#page-preloader'),
			$spinner = $preloader.find('.spinner-loader');
			$spinner.fadeOut();
			$preloader.delay(500).fadeOut('slow');
			window.scrollTo( 0, 0 );
		},

		setEqualHeight: function(){
			var equalHeight = $('body').data('equal-height');
			if(equalHeight && equalHeight.length){
				var columns = $(equalHeight);
				var tallestcolumn = 0;
				columns.each(
					function(){
						var currentHeight = $(this).height();
						if(currentHeight > tallestcolumn){
							tallestcolumn = currentHeight;
						}
					}
				);
				columns.height(tallestcolumn);
			}
		},

		initMileageSlider: function(options){
		   var min= $('#mileage_limit_day_min').data('min');
		   var max= $('#mileage_limit_day_max').data('max');
		   var min_all= $('#mileage_limit_day_min_all').data('min');
		   var max_all= $('#mileage_limit_day_max_all').data('max');
		   if(min==undefined || max==undefined){
			   min=0;
			   max=1000;	
		   }
			var slider = $('#mileage_slider').length;
			if(slider){
		        jQuery("#mileage_slider").slider({
		            min: min_all,
		            max: max_all,
		            values: [min,max],
		            range: true,
		            slide: function(event, ui){
						$("#mileage_slider .ui-slider-handle span.min").text(ui.values[0]);
		                $("#mileage_slider .ui-slider-handle span.max").text(ui.values[1]);
		            },
		            stop:function(event, ui){
		                $("#mileage_limit_day_min").val(ui.values[0]);
    					$("#mileage_limit_day_max").val(ui.values[1]);
		            }
		        });
		        $("#mileage_slider .ui-slider-handle:first-of-type").append("<span id='min' class='min'>"+min+"</span>");
		        $("#mileage_slider .ui-slider-handle:last-of-type").append("<span id='max' class='max'>"+max+"</span>");
			}
		},


		initPriceSlider: function(options){
		   var min= $('#price_min').data('min');
		   var max= $('#price_max').data('max');
		   var min_all= $('#price_min_all').data('min');
		   var max_all= $('#price_max_all').data('max');
		   if(min==undefined || max==undefined){
			   min=0;
			   max=1000;	
		   }
			var slider = $('#price_slider').length;
			if(slider){
		        jQuery("#price_slider").slider({
		            min: min_all,
		            max: max_all,
		            values: [min,max],
		            range: true,
		            slide: function(event, ui){
						$("#price_slider .ui-slider-handle span.min").text(ui.values[0]);
		                $("#price_slider .ui-slider-handle span.max").text(ui.values[1]);
		            },
		            stop:function(event, ui){
		                $("#price_min").val(ui.values[0]);
    					$("#price_max").val(ui.values[1]);
		            }
		        });
		        $("#price_slider .ui-slider-handle:first-of-type").append("<span id='min' class='min'>"+min+"</span>");
		        $("#price_slider .ui-slider-handle:last-of-type").append("<span id='max' class='max'>"+max+"</span>");
			}
		},

		initListPriceSlider: function(options){
		   var min= $('#list_price_min').data('min');
		   var max= $('#list_price_max').data('max');
		   var min_all= $('#list_price_min_all').data('min');
		   var max_all= $('#list_price_max_all').data('max');
		   if(min==undefined || max==undefined){
			   min=0;
			   max=1000;	
		   }
			var slider = $('#list_price_slider').length;
			if(slider){
		        jQuery("#list_price_slider").slider({
					  step: 2000,
		            min: min_all,
		            max: max_all,
		            values: [min],
		            range: false,
		            slide: function(event, ui){
					
						$("#list_price_slider .ui-slider-handle span.min").text(ui.values[0]);
		              	var multi;
						for (var i = 0; i < items.length; i++) {
							if (items[i][0] == ui.values[0] + "@" + $("#list_days_min").val()) {
								multi = items[i][1];
								$('#total_earning').html('£'+addDigitGrouping(multi.toFixed(0)));
							}
						}
						  
			        },
		            stop:function(event, ui){
		                $("#list_price_min").val(ui.values[0]);
    		        }
		        });
		        $("#list_price_slider .ui-slider-handle:first-of-type").append("<span id='min' class='min'>"+min+"</span>");
		  	}
		},


		initListDaysSlider: function(options){
		   var min= $('#list_days_min').data('min');
		   var max= $('#list_days_max').data('max');
		   var min_all= $('#list_days_min_all').data('min');
		   var max_all= $('#list_days_max_all').data('max');
		   if(min==undefined || max==undefined){
			   min=0;
			   max=1000;	
		   }
			var slider = $('#list_days_slider').length;
			if(slider){

		        jQuery("#list_days_slider").slider({
					  step: 1,
		            min: min_all,
		            max: max_all,
		            values: [min],
		            range: false,
		            slide: function(event, ui){
						$("#list_days_slider .ui-slider-handle span.min").text(ui.values[0]);
		                var multi='';
						for (var i = 0; i < items.length; i++) {
							if (items[i][0] == $("#list_price_min").val() +"@"+ui.values[0] ) {
								multi = items[i][1];
							   $('#total_earning').html('£'+addDigitGrouping(multi.toFixed(0)));
							}
						}
						  
					  },
		            stop:function(event, ui){
		                $("#list_days_min").val(ui.values[0]);
    				 }
		        });
		        $("#list_days_slider .ui-slider-handle:first-of-type").append("<span id='min' class='min'>"+min+"</span>");
		   }
		},

		initScrollAnimations: function(options) {
			var scrollingAnimations = $('body').data("scrolling-animations");
			if(scrollingAnimations){
				new WOW().init();
			}
		},
		
		initOwlCarousel: function(options) {
			$(".enable-owl-carousel").each(function(i) {
				var $owl = $(this);
				
				var itemsData = $owl.data('items');
				var autoPlayData = $owl.data('auto-play');
				var navigationData = $owl.data('navigation');
				var stopOnHoverData = $owl.data('stop-on-hover');
				var itemsDesktopData = $owl.data('items-desktop');
				var itemsDesktopSmallData = $owl.data('items-desktop-small');
				var itemsTabletData = $owl.data('items-tablet');
				var itemsTabletSmallData = $owl.data('items-tablet-small');
				
				$owl.owlCarousel({
					items: itemsData,
					pagination: false,
					navigation: navigationData,
					autoPlay: autoPlayData,
					stopOnHover: stopOnHoverData,
					navigationText: ["",""],
					itemsCustom:[
						[0, 1],
						[500, itemsTabletSmallData],
						[710, itemsTabletData],
						[992, itemsDesktopSmallData],
						[1199, itemsDesktopData]
					],
				});
			});
		},
		
		initBxSlider: function(options) {
			$(".enable-bx-slider").each(function(i) {
				var $bx = $(this);
				var pagerCustomData = $bx.data('pager-custom');
				var modeData = $bx.data('mode');
				var pagerSlideData = $bx.data('pager-slide');
				var modePagerData = $bx.data('mode-pager');
				var pagerQtyData = $bx.data('pager-qty');
				
				
				var realSlider = $bx.bxSlider({
					pagerCustom: pagerCustomData,
					mode: modeData,
				});
				if(pagerSlideData){
					var realThumbSlider=$(pagerCustomData).bxSlider({
						mode: modePagerData,
						minSlides: pagerQtyData,
						maxSlides: pagerQtyData,
						moveSlides: 1,
						slideMargin: 20,
						pager:false,
						infiniteLoop:false,
						hideControlOnEnd:true,
						nextText:'<span class="fa fa-angle-down"></span>',
						prevText:'<span class="fa fa-angle-up"></span>'
					});
					linkRealSliders(realSlider,realThumbSlider,pagerCustomData);
					if($(pagerCustomData+" a").length <= pagerQtyData ){
						$(pagerCustomData+" .bx-next").hide();
					}
				}
			});
			function linkRealSliders(bigS,thumbS,sliderId){
				$(sliderId).on("click","a",function(event){
					event.preventDefault();
					var newIndex=$(this).data("slide-index");
					bigS.goToSlide(newIndex);
				});
			}
		},
		
		initTabs: function(options) {
			$(document).on('click', '.j-tab', function(e){
				var to = $($(this).attr('data-to'));
				if(to.length > 0){
					if(to.css('display') == 'none'){
						var tabs = to.parent().find('.j-tab');
						if(tabs.length > 0){
							tabs.each(function(i,e){
								if($(e).hasClass('m-active')){
									$(e).removeClass('s-lineDownCenter');
									$(e).removeClass('m-active');                        
								}
								var to2 = $($(e).attr('data-to'));
								if(to2.css('display') == 'block')
									to2.css('display','none');
							});
						}
						to.css('display','block');
						if(!(($(this).hasClass('owl-next')) || ($(this).hasClass('owl-prev'))))
							$(this).addClass('m-active s-lineDownCenter');
						else{
							$('.b-auto__main-toggle').each(function(i,e){
								if($(e).attr('data-to').replace('#','') == to.attr('id')){
									$(e).addClass('m-active s-lineDownCenter');
								}
							})
						}      
					}
				}
				e.preventDefault();
			});
		},
		
		initCollapsible: function(options) {
			var collapse = $('.j-more').length;
			if(collapse){
				$(document).on('click', '.j-more', function(e){
					var inside = $(this).parent().parent().find('.j-inside');
					var span = $(this).find('span.fa');
					if(inside.length > 0){
						span.toggleClass('fa-angle-left');
						span.toggleClass('fa-angle-down');
						$(this).parent().toggleClass('m-active');
						inside.toggleClass('m-active');
					}
					e.preventDefault();
				});
			}
		},
		
		initNumberCounter: function(options) {
			if ($('body').length) {
				var waypointScroll = $('.percent-blocks').data('waypoint-scroll');
				if(waypointScroll){
					$(window).on('scroll', function() {
						var winH = $(window).scrollTop();
						$('.percent-blocks').waypoint(function() {
							$('.chart').each(function() {
								CharsStart();
							});
						}, {
							offset: '80%'
						});
					});
				}
			}
			function CharsStart() {
				$('.chart').easyPieChart({
					barColor: false,
					trackColor: false,
					scaleColor: false,
					scaleLength: false,
					lineCap: false,
					lineWidth: false,
					size: false,
					animate: 3000,
					onStep: function(from, to, percent){
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			}
		},

		initGoToTop: function(options) {
			// Show/Hide Button on Window Scroll event.
			$(window).on('scroll', function(){
				var fromTop = $(this).scrollTop();
				var display = 'none';
				if(fromTop > 650){
					display = 'block';
				}
				$('#to-top').css({'display': display});
			});
			$("#to-top").smoothScroll();
		},
	};

	Core.initialize();

})();