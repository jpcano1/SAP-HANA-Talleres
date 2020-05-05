sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Products", {

        onInit: function () {

            this.router = sap.ui.core.UIComponent.getRouterFor(this);
            this.router.attachRoutePatternMatched(this.onRouteMatched, this);

        },
        handleNavButtonPress: function () {
            this.router.navTo("");
        },
        onRouteMatched: function (oEvent) {
            var oParameters = oEvent.getParameters();

            if (oParameters.name !== "Products") {
                return;
            }

            var oView = this.getView();
            var sEntityPath = "/Product_Categories('" + oParameters.arguments.entity + "')";

            var oModel = oView.getModel('gbi');
            var oContext = oModel.getContext(sEntityPath);
            oView.setBindingContext(oContext, 'gbi');

        },
        handleListItemPress: function (evt) {

            this.showDetail(evt.getParameter("listItem") || evt.getSource());

        },
        showDetail: function (oItem) {
            var entity = oItem.getBindingContext("gbi").getPath().split("'");

            this.router.navTo("Detail", {
                from: "Products",
                entity: entity[1]
            });
        }
    });
});