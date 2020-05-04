
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/ODataModel"
 ], function(UIComponent, ODataModel) {
     "use strict";
     return UIComponent.extend("ui5.Component", {
         metadata: {
             rootView: "ui5.view.App",
 
             routing: {
 
                 config: {
                     viewType: "XML",
                     viewPath: "ui5.view",
                     transition: "slide",
                     clearTarget: true,
                     targetControl: "idAppControl"
                 },
 
                 routes: [
                     {
                         pattern: "",
                         name: "Master",
                         view: "Master",
                         targetAggregation: "pages"
                     },
                     {
                         pattern: "Resources",
                         name: "Resources",
                         view: "Resources",
                         targetAggregation: "pages"
                     }
                 ]
             }
         },
 
         init: function() {
             UIComponent.prototype.init.apply(this, arguments);
 
             this.getRouter().initialize();
 
            //  var oModel = new ODataModel(URL OF THE SERVICE OF T7);
            //  this.setModel(oModel,'gbi');
         }
     });
 }); 