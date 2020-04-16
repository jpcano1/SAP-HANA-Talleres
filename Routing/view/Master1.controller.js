sap.ui.controller("routing.view.Master1", {
    onInit: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },

    handleListItemPress: function () {

        this.router.navTo("Detail1", {
            from: "Master1"
        });

    }
});