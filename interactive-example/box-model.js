

$(function(){
  
  $("a.ss").click(function() { 
    
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
		$("link").attr("href",$(this).attr('rel'));
    return false;
  });
 

  var resize = function(){
     if ($(window).width() > $(".box")[0].scrollWidth) {
       $(".box-controls").css("width",$(window).width())
     } else {
       $(".box-controls").css("width",$("body")[0].scrollWidth)
     }       
  }
  
  $(window).resize(resize);
  
	var boxModel = {
    
    

		$box: $('.box'),
		$boxInner: $('<div class="box-inner box-property" data-property="content"></div>'),
		$boxMargin: $('<div class="box-margin box-property" data-property="margin"></div>'),
		$boxPadding: $('<div class="box-padding box-property" data-property="padding"></div>'),
		$boxBorder: $('<div class="box-border box-property" data-property="border"></div>'),

		boxSizing: 'content-box',

		prependElements: function(){
			boxModel.$box.prepend(
				boxModel.$boxMargin,
				boxModel.$boxBorder,
				boxModel.$boxPadding,
				boxModel.$boxInner
			);
			$('.box-property').append('<span class="box-property-vertical"></span><span class="box-property-horizontal"></span>');
			$('.box-controls input').change(boxModel.getBoxProperties);
			boxModel.getBoxProperties();
			boxModel.showPropertyOnHover();
		},
		getBoxProperties: function(){
			boxModel.boxSizing = 'content-box';

			boxModel.boxWidth         = parseInt($('#boxWidth').val(), 10);
			boxModel.boxHeight        = parseInt($('#boxHeight').val(), 10);
      
			boxModel.boxMarginTop     = parseInt($('#boxMargin').val(), 10);
			boxModel.boxMarginRight   = parseInt($('#boxMargin').val(), 10);
			boxModel.boxMarginBottom  = parseInt($('#boxMargin').val(), 10);
			boxModel.boxMarginLeft    = parseInt($('#boxMargin').val(), 10);
      
			boxModel.boxPaddingTop    = parseInt($('#boxPadding').val(), 10);
			boxModel.boxPaddingRight  = parseInt($('#boxPadding').val(), 10);
			boxModel.boxPaddingBottom = parseInt($('#boxPadding').val(), 10);
			boxModel.boxPaddingLeft   = parseInt($('#boxPadding').val(), 10);
      
			boxModel.boxBorderTop     = parseInt($('#boxBorder').val(), 10);
			boxModel.boxBorderRight   = parseInt($('#boxBorder').val(), 10);
			boxModel.boxBorderBottom  = parseInt($('#boxBorder').val(), 10);
			boxModel.boxBorderLeft    = parseInt($('#boxBorder').val(), 10);
      

			boxModel.positionBoxProperties();
		},
		addDimensionsToModel: function(){
			var properties = ['Padding', 'Margin', 'Border'];
			var i;

			for ( i = 0; i < properties.length; i++ ) {

				boxModel['$box' + properties[i]].find('.box-property-vertical').attr({
					'data-top': boxModel['box' + properties[i] + 'Top'],
					'data-bottom' : boxModel['box' + properties[i] + 'Bottom']
				}).next('.box-property-horizontal').attr({
					'data-left': boxModel['box' + properties[i] + 'Left'],
					'data-right': boxModel['box' + properties[i] + 'Right']
				});

			}

		},
		generateShorthand: function(property) {
				return boxModel['box' + property + 'Top'] + 'px;\n';
		},
		generateCode: function(){
			var boxCode;

			boxCode  = '.box {\n';

			boxCode += '    width: ' + boxModel.boxWidth + 'px;\n';
			boxCode += '    height: ' + boxModel.boxHeight + 'px;\n';

			boxCode += '    margin: ' + boxModel.generateShorthand('Margin');
			boxCode += '    padding: ' + boxModel.generateShorthand('Padding');
			boxCode += '    border-width: ' + boxModel.generateShorthand('Border');

			boxCode += '}';

			$('#boxCode').html(boxCode);
		},
		showPropertyOnHover: function(){
			$('.box-property').hover(function(){
				$('.box-inner').attr('data-hover-property', $(this).attr('data-property'));
			});
		},
		positionBoxProperties: function(){
			// Margin
			var boxMarginTop = boxModel.boxMarginTop;
			var boxMarginLeft = boxModel.boxMarginLeft;
			var boxMarginLeftRight = boxModel.boxMarginLeft + boxModel.boxMarginRight;
			var boxMarginTopBottom = boxModel.boxMarginTop + boxModel.boxMarginBottom;

			// Padding
			var boxPaddingTop = boxModel.boxPaddingTop;
			var boxPaddingLeft = boxModel.boxPaddingLeft;
			var boxPaddingLeftRight = boxModel.boxPaddingLeft + boxModel.boxPaddingRight;
			var boxPaddingTopBottom = boxModel.boxPaddingTop + boxModel.boxPaddingBottom;

			// Border
			var boxBorderTop = boxModel.boxBorderTop;
			var boxBorderLeft = boxModel.boxBorderLeft;
			var boxBorderLeftRight = boxModel.boxBorderLeft + boxModel.boxBorderRight;
			var boxBorderTopBottom = boxModel.boxBorderTop + boxModel.boxBorderBottom;

			// Box
			// reposition to avoid overlap of page elements
			var boxTop = boxMarginTop + boxBorderTop + boxPaddingTop + 6;
			var boxLeft = boxMarginLeft + boxBorderLeft + boxPaddingLeft;

			var boxWidth = boxModel.boxSizing === 'border-box' ? boxModel.boxWidth - boxPaddingLeftRight - boxBorderLeftRight : boxModel.boxWidth;
			var boxHeight = boxModel.boxSizing === 'border-box' ? boxModel.boxHeight - boxPaddingTopBottom - boxBorderTopBottom : boxModel.boxHeight;

			// Margin Box
			var boxMarginWidth = boxWidth + boxMarginLeftRight + boxPaddingLeftRight + boxBorderLeftRight;
			var boxMarginHeight = boxHeight + boxMarginTopBottom + boxPaddingTopBottom + boxBorderTopBottom;

			// Border Box
			var boxBorderWidth = boxWidth + boxPaddingLeftRight + boxBorderLeftRight;
			var boxBorderHeight = boxHeight + boxPaddingTopBottom + boxBorderTopBottom;

			// Padding Box
			var boxPaddingWidth = boxWidth + boxPaddingLeftRight + 2;
			var boxPaddingHeight = boxHeight + boxPaddingTopBottom + 2;

			if ( boxMarginTop >= 0 ) {
				boxMarginTop = (boxMarginTop * -1) - boxPaddingTop - boxBorderTop;
			}
			if ( boxMarginLeft >= 0 ) {
				boxMarginLeft = boxMarginLeft * -1 - boxPaddingLeft - boxBorderLeft;
			}
			if ( boxBorderTop >= 0 ) {
				boxBorderTop = (boxBorderTop * -1) - boxPaddingTop;
			}
			if ( boxBorderLeft >= 0 ) {
				boxBorderLeft = (boxBorderLeft * -1) - boxPaddingLeft;
			}
			if ( boxPaddingTop >= 0 ) {
				boxPaddingTop = boxPaddingTop * -1;
			}
			if ( boxPaddingLeft >= 0 ) {
				boxPaddingLeft = boxPaddingLeft * -1;
			}
        
      boxModel.$box.css({
				top: boxTop + 12,
				left: boxLeft + 20,
				width: boxWidth + 'px',
				height: boxHeight + 'px'
			});
      
			boxModel.$boxInner.css({
				width: boxWidth + 'px',
				height: boxHeight + 'px'
			}).attr({
				'data-width': $('#boxWidth').val(),
				'data-height': $('#boxHeight').val()
			});

			boxModel.$boxPadding.css({
				width: boxPaddingWidth + 'px',
				height: boxPaddingHeight + 'px',
				top: boxPaddingTop + 'px',
				left: boxPaddingLeft + 'px'
			});
			boxModel.$boxBorder.css({
				width: boxBorderWidth + 'px',
				height: boxBorderHeight + 'px',
				top: boxBorderTop + 'px',
				left: boxBorderLeft + 'px'
			});

			boxModel.$boxMargin.css({
				width: boxMarginWidth + 'px',
				height: boxMarginHeight + 'px',
				top: boxMarginTop + 'px',
				left: boxMarginLeft + 'px'
			});


			boxModel.generateCode();
			boxModel.addDimensionsToModel();
      
      setTimeout(resize,500)
		}
	};

	boxModel.prependElements();

});
