sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createTodoModel: function() {
			var oData = [
				{
					"task": "Buy Milk",
					"description": "Buy Milk in a supermarket near you",
					"status": 1
				},
				{
					"task": "Pay Bills",
					"description": "Pay Bills ASAP",
					"status": 2
				},
				{
					"task": "Exercise",
					"description": "Cause you are fat, pal!",
					"status": 3
				}
			];
			var oModel = new JSONModel(oData);
			return oModel;
		}
	};
});