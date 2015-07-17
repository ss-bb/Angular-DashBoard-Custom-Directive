app.directive("dynCustom", function($compile,$rootScope,widgetService){
    return({
      transclude:true,
      priority: 1000,
      restrict:"AE",
      compile: function(element, attributes) {

		    var update = function(scope,element,attributes,v) {
		    	var content = attributes.content;
		    	var type = attributes.type;
		    	var sth = widgetService.getDirective(content,type);
				element.empty();
				element.append($compile(sth)(scope));
		    }
			var linkFunction = function(scope, element, attributes) {
				update(scope,element,attributes);
				scope.$watch(function () { return attributes.content }, function (v) {
            		update(scope,element,attributes,v);
          		});
          		scope.$watch(function () { return attributes.type }, function (v) {
            		update(scope,element,attributes,v);
          		});
			};

			return linkFunction;
		}
  });
}); 