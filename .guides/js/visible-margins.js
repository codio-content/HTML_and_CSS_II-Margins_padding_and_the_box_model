function getStyleRuleValue(style, selector, sheet) {
    var sheets = typeof sheet !== 'undefined' ? [sheet] : document.styleSheets;
    for (var i = 0, l = sheets.length; i < l; i++) {
        var sheet = sheets[i];
        if( !sheet.cssRules ) { continue; }
        for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
            var rule = sheet.cssRules[j];
            if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                return rule.style[style];
            }
        }
    }
    return null;
}

$(document).ready(function(){
  $("p").wrap('<div class="margins"></div>');
  
  $("div.margins").each(function(){
    
    var $div = $(this);
    var $p = $div.children("p");
    var classname = $p.attr('class');
    
    var margin_top = $p.css("margin-top");
    var margin_bottom = $p.css("margin-bottom");
    var margin_left = $p.css("margin-left");
    var margin_right = $p.css("margin-right");
    
    var style = getStyleRuleValue('margin', '.'+classname);
    
    $p.css("margin","0px");
    
    $div.css("padding",style);
    
  })
  
  
})