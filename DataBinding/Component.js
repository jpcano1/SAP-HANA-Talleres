jQuery.sap.declare("ui5.Component");

sap.ui.core.UIComponent.extend("ui5.Component", {
    metadata: {},

    init: function () {

        //call createContent
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var oModel = new sap.ui.model.json.JSONModel("model/HelloModel.json");
        this.setModel(oModel, "hello");
    },

    createContent: function () {

        // create root view
        var oView = sap.ui.view({
            id: "app",
            viewName: "ui5.view.App",
            type: "JS",
            viewData: {
                component: this
            }
        });

        return oView;
    }
});