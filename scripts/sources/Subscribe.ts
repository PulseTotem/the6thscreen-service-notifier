/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="../../t6s-core/core-backend/scripts/server/SourceItf.ts" />

class Subscribe extends SourceItf {

	constructor(params : any, notifierNamespaceManager : NotifierNamespaceManager) {
		super(params, notifierNamespaceManager);

		if (this.checkParams(["InfoDuration","Limit"])) {
			this.run();
		}
	}

	run() {
		Logger.debug("listenNotifications Action with params :");
		Logger.debug(this.getParams());
	}
}