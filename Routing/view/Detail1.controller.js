sap.ui.controller("routing.view.Detail1", {
    onInit: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this.onRouteMatched, this);

    },

    onRouteMatched: function (oEvent) {
        var oParameters = oEvent.getParameters();

        if (oParameters.name !== "Detail1") {
            return;
        }

        var oView = this.getView();

        var sEntityPath = "/collection/" + oParameters.arguments.entity;
        var oModel = oView.getModel();
        var context = new sap.ui.model.Context(oModel, sEntityPath);

        oView.setBindingContext(context);

    }
});