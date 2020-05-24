sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/ODataModel"
], function (UIComponent, ODataModel) {
    "use strict";
    return UIComponent.extend("gbi.Component", {
        metadata: {
            rootView: "gbi.view.App",

            routing: {

                config: {
                    viewType: "XML",
                    viewPath: "gbi.view",
                    targetControl: "splitApp",
                    clearTarget: false,
                    transition: "slide"
                },

                routes: [{
                        pattern: "",
                        name: "Customers",
                        view: "Master",
                        targetAggregation: "masterPages"
                    },
                    {
                        pattern: "Orders/{entity}",
                        name: "Details",
                        view: "Details",
                        targetAggregation: "detailPages"
                    },
                    {
                        pattern: "SalesOrders",
                        name: "Orders",
                        view: "Master1",
                        targetAggregation: "masterPages"
                    },
                    {
                        pattern: "Sales/{entity}",
                        name: "Details1",
                        view: "Details1",
                        targetAggregation: "detailPages"
                    }
                ]
            }
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();

            var oModel = new ODataModel("http://h06.cob.csuchico.edu:8000/gbi-student-274/gbi/services/gbi.xsodata");
            this.setModel(oModel, 'gbi');
        }
    });
});