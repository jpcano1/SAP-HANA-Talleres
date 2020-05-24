sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Master1", {

        onInit: function () {
            this.router = sap.ui.core.UIComponent.getRouterFor(this);
        },

        handleListItemPress: function (oItem) {

            var entity = oItem.getSource().getBindingContext("gbi").getPath().split("'");

            this.router.navTo("Details1", {
                from: "Master1",
                entity: entity[1]
            });
        }
    });
});