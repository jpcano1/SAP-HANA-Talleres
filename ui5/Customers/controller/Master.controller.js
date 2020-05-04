sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Master", {

        onInit: function () {
            this.router = sap.ui.core.UIComponent.getRouterFor(this);
        },

        handleListItemPress: function (oItem) {

            var entity = oItem.getSource().getBindingContext("gbi").getPath().split("'");

            this.router.navTo("Details", {
                from: "Master",
                entity: entity[1]
            });
        }
    });
});