sap.ui.controller("scn_exercise.view.App", {
	onAfterRendering:function(){ 
		debugger;
		var v = this.getView();
		var dom = v.getDomRef();
		var iDiv = document.createElement('div');
		iDiv.id = 'jerry';
		dom.appendChild(iDiv);
		var iCanvas = document.createElement('canvas');
		iCanvas.id = 'canvas';
		iDiv.appendChild(iCanvas);
		startSnow();
	},

	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
		
		// load page on demand
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "scn_exercise.view." + pageId,
				type : "XML"
			});
			/* Jerry 2015-02-14 20:49PM
			 * assign detail controller's nav reference to App.controller
			 */
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		// show the page
		app.to(pageId);
		
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
	}
});