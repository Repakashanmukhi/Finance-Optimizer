sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    var that;
    return Controller.extend("financeoptimizer.controller.View1", {
        onInit() {
            this.oBus = this.getOwnerComponent().getEventBus();
            
        },
        onWelcome: function(){
            sap.m.MessageToast.show("Button clicked!");
            this.oBus.publish("flexible","setView2");
        }
    });
});