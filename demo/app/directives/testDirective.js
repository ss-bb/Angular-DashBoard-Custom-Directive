app.directive("test", function($compile,$rootScope){
    return({
      transclude:true,
      priority: 1000,
      restrict:"AE",
      compile: function(element, attributes) {
		    var update = function(scope,element,attributes,v) {
		    	var content = attributes.content;
		    	var sth = getDirectiveHtmlCode(content,v);
		    	console.log(sth);
		    	/*var baliseName = content.split(' ')[0];
					var contentBalise = ['<',content,"></",baliseName,">"].join('');*/
					var type= attributes.type;
					element.empty();
					element.append($compile(sth)(scope));
		    }
				var linkFunction = function(scope, element, attributes) {
					update(scope,element,attributes);
					scope.$watch(function () { return attributes.content }, function (v) {
            update(scope,element,attributes,v);
          });
				};
				return linkFunction;
			}
  });
}); 