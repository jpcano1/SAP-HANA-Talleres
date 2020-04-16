jQuery.sap.declare("routing.Component");

sap.ui.core.UIComponent.extend("routing.Component", {
    metadata: {},

    init: function () {

        jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
        jQuery.sap.require("sap.ui.core.routing.HashChanger");

        //call createContent
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        this._router = this.getRouter();

        //initlialize the router
        this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
        this._router.initialize();

    },

    createContent: function () {

        var oView = sap.ui.view({
            id: "app",
            viewName: "routing.view.App",
            type: "XML",
            viewData: {
                component: this
            }
        });

        var oModel = new sap.ui.model.json.JSONModel("model/data.json");
        oView.setModel(oModel);

        return oView;

    }

});