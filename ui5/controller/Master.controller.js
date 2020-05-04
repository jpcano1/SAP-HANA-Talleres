sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
 ], function(Controller,JSONModel) {
     "use strict";
     return Controller.extend("ui5.controller.Master", {
         onInit: function() {
             this.router = sap.ui.core.UIComponent.getRouterFor(this);
             
                       var oModel = new JSONModel("model/views.json");
             this.getView().setModel(oModel,"views");
         },
 
         handleTilePress: function(evt) {
             var oView = evt.getSource().getInfo();
 
             this.router.navTo(oView, {
                 from: "Master"
             });
         }
 
     });
 });