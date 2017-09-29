var fs = require('fs');
var phantom = require('phantom');

var express = require('express');
var app = express();
app.use(express.static('/home/codio/workspace'));
app.listen(1024);

var box_domain = "localhost:1024";
var fullurl = "http://"+ box_domain + "/a-first-challenge/index.html";
var underscoreurl = "http://"+ box_domain + "/.guides/tests/underscore-min.js";
var errors = [];

//console.log(fullurl);

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.includeJs(underscoreurl, function(){
      page.evaluate(function () { 
        
        var errors =  [];
        
        var box1 = document.querySelector(".box1");
        var box2 = document.querySelector(".box2");
        var box3 = document.querySelector(".box3");
        var margins = ["marginTop", "marginBottom", "marginLeft", "marginRight"];
        var paddings = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"];
        var borders = ["borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth"];

        var check = function(style, properties, value) {
          return _.any(properties,function(item){
              return style[item] != value;
          })
        }
        
        
        if (box1) {
          var box1_style = getComputedStyle(box1,null);
          var correct_margin = "20px";
          var correct_padding = "10px";
          var correct_border = "1px";

          
          if (check(box1_style, margins, correct_margin)) {
            errors.push("box1 doesn't have correct margins");
          }

          if (check(box1_style, paddings, correct_padding)) {
            errors.push("box1 doesn't have correct paddings");
          }

          if (check(box1_style, borders, correct_border)) {
            errors.push("box1 doesn't have correct borders");
          }
          
          
          
        } else {
          errors.push("box1 was not found.")
        }
        
        if (box2) {
          var box2_style = getComputedStyle(box2,null);
          var correct_margin = "5px";
          var correct_padding = "20px";
          var correct_border = "2px";
          
          if (check(box2_style, margins, correct_margin)) {
            errors.push("box2 doesn't have correct margins");
          }

          if (check(box2_style, paddings, correct_padding)) {
            errors.push("box2 doesn't have correct paddings");
          }

          if (check(box2_style, borders, correct_border)) {
            errors.push("box2 doesn't have correct borders");
          }
          
        } else {
          errors.push("box2 was not found.")
        }
        
        if (box3) {
          var box3_style = getComputedStyle(box3,null);
          var correct_margin = "50px";
          var correct_padding = "40px";
          var correct_border = "6px";
          
          if (check(box3_style, margins, correct_margin)) {
            errors.push("box3 doesn't have correct margins");
          }

          if (check(box3_style, paddings, correct_padding)) {
            errors.push("box3 doesn't have correct paddings");
          }

          if (check(box3_style, borders, correct_border)) {
            errors.push("box3 doesn't have correct borders");
          }
          
        } else {
          errors.push("box3 was not found.")
        }
        
        
        

        return errors;
        
      
      }, function (retErrors) {
        
        if (!retErrors) {
          process.stdout.write("There was a problem running the test");
          ph.exit();
          process.exit(1);
        } else {
          if(retErrors.length <= 0 ) {
            process.stdout.write('Well done!')
            ph.exit();
            process.exit(0);
          }
          else {
            process.stdout.write(retErrors.join("\n"))
            ph.exit();
            process.exit(1);
          }
        }
        
      });
      });
    });
  });
});







  







  
