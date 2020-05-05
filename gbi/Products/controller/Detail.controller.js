sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Detail", {

        onInit: function () {

            this.router = sap.ui.core.UIComponent.getRouterFor(this);
            this.router.attachRoutePatternMatched(this.onRouteMatched, this);

        },

        onRouteMatched: function (oEvent) {
            var oParameters = oEvent.getParameters();

            var oView = this.getView();

            // When navigating in the Detail page, update the binding context 
            if (oParameters.name !== "Detail") {
                return;
            }

            var sEntityPath = "/Products('" + oParameters.arguments.entity + "')";
            var oModel = oView.getModel('gbi');
            var context = new sap.ui.model.Context(oModel, sEntityPath);

            oView.setBindingContext(context, 'gbi');
        },
        formatCurrency: function (value) {
            var d = ".";
            var t = ",";
            var c = 2;
            var p = "$";
            c = isNaN(c = Math.abs(c)) ? 2 : c;
            var s = value < 0 ? "-" : "";
            var i = parseInt(value = Math.abs(+value || 0).toFixed(2)) + "";
            var j = (j = i.length) > 3 ? j % 3 : 0;
            return p + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(value - i).toFixed(2).slice(2) : "");
        },
        imageURL: function (file) {
            return "http://h06.cob.csuchico.edu:8000/gbi-student-274/gbi/Products/images/" + file + ".jpg";
        }
    });
});