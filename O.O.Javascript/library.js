// ----------------- Decprator -----

var carlike = function(obj) {
		obj.loc = loc;
		obj.move = function (car) {
		this.loc++;
	};
	return obj;
};

//---------------  Classes -------------

var Car = function(loc) { // constructor function created to specific object as member of class
		var obj = {loc: loc};
		extend(obj, Car.methods);
	return obj;
};

var Car.methods = {
 move :function (car) {
		this.loc++;
	},
// on : function(){ /* .... */},
// off : function(){ /* .... */}
};

// ------- Prototypal Classes -----

 var Car = function(loc) { // constructor function created to specific object as member of class
		this.loc = loc;
};

var Car.prototype.move = function (car) {
	this.loc++;
};

//--- Superclass and Subclass ---

var Car = function() {
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};


var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function{ /*.....*/};
	return obj;
};

var Cop = function(loc) {
	var obj = Car(loc);
	obj.call = function() {/*....*/};
	return obj;
}




































