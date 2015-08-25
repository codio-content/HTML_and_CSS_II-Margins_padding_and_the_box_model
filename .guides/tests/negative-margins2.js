var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/negative-margins/example2.html";

var ast = cssutils.get_ast(stylepath);


var p1_check = {
  "selector" : ".top",
  "check" : "margin-top:-2em;",
  "error" : "The class .top doesn't have the correct negative margins."
}



if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  ast.check(p1_check,errors);
}






if( errors.length <= 0 ) {
  process.stdout.write('Well done!!!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}

