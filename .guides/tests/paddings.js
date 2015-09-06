var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/paddings-challenge/challenge.html";

var ast = cssutils.get_ast(stylepath);


var p1_check = {
  "selector" : ".p1",
  "check" : "padding:5%;",
  "error" : ".p1 doesn't have the correct paddings."
}

var p2_check = {
  "selector" : ".p2",
  "check" : "padding:10px 35px;",
  "error" : ".p2 doesn't have the correct paddings."
}

var p3_check = {
  "selector" : ".p3",
  "check" : "padding:10px 40px 20px;",
  "error" : ".p3 doesn't have the correct paddings."
}

var p4_check = {
  "selector" : ".p4",
  "check" : "padding:20px 25px 60px 30px;",
  "error" : ".p4 doesn't have the correct paddings."
}



if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  ast.check(p1_check,errors);
  ast.check(p2_check,errors);
  ast.check(p3_check,errors);
  ast.check(p4_check,errors);

}






if( errors.length <= 0 ) {
  process.stdout.write('Well done!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}

