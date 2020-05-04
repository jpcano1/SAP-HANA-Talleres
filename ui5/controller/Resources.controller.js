
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
 ], function(Controller, JSONModel) {
     "use strict";
     return Controller.extend("ui5.controller.Resources", {
         onInit: function() {
             this.router = sap.ui.core.UIComponent.getRouterFor(this);
 
             var iModel = new JSONModel('model/resources.json');
             this.getView().setModel(iModel, 'resources');
 
         },
 
         handleNavButtonPress: function() {
             this.router.navTo("Master", {
                 from: "Resources"
             });
         },
 
         handleListPress: function(evt) {
             var url = evt.getSource().getBindingContext('resources').getProperty('url');
             window.open(url, '_blank');
         }
 
     });
 });
 