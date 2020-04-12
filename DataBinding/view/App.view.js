sap.ui.jsview("ui5.view.App", {

	createContent: function () {
				
		// create app
		this.app = new sap.m.App();
		
		// load the master page using an XML view
		var hello = sap.ui.xmlview("Hello", "ui5.view.Hello");

		this.app.addPage(hello, true);
		
		return this.app;
	}
});