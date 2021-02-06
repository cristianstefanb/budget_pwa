/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"csb/budget_pwa/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});