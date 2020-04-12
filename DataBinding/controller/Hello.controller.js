sap.ui.controller("ui5.controller.Hello", {
    doIt : function(oEvent) {
    
        jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("Pressed: " + oEvent.getSource().getId());
		
    }
});