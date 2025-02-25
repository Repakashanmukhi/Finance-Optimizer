sap.ui.define([
  "sap/ui/core/mvc/Controller",
    "sap/f/library",
  "sap/ui/core/mvc/XMLView"
], (BaseController,fioriLibrary,XMLView) => {
  "use strict";

  return BaseController.extend("financeoptimizer.controller.App", {
      onInit() {
        this.oBus = this.getOwnerComponent().getEventBus();
        this.oBus.subscribe("flexible","setView1",this.setView1,this);
        this.oBus.subscribe("flexible","setView2",this.setView2,this);
        this.oFlexible = this.byId("fcl");
      },
    setView2: function (){
      this._loadView({
        id: "midView",
        viewName: "financeoptimizer.view.View2",
      }).then(function(View2) {
        this.oFlexible.addMidColumnPage(View2);
        this.oFlexible.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
      }.bind(this));
    },
    _loadView: function(options) {
      var mViews = this._mViews = this._mViews || Object.create(null);
      if (!mViews[options.id]) {
        mViews[options.id] = this.getOwnerComponent().runAsOwner(function() {
          return XMLView.create(options);
        });
      }
      return mViews[options.id];
     }
  });
});