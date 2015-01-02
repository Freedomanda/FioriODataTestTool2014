jQuery.sap.declare("scn_exercise.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

scn_exercise.util.Formatter = {
	
	_statusStateMap : {
		"P" : "Success",
		"N" : "Warning"
	},

	statusText :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("StatusText" + value, "?");
	},
	
	statusState :  function (value) {
		var map = scn_exercise.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"});
			var formattedValue = oDateFormat.format(new Date(value));
			console.warn("formatted date: " + formattedValue);
			return formattedValue;
		} else {
			return value;
		}
	}
};