/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="../libsdef/datejs.d.ts" />
/// <reference path="../t6s-core/core-backend/libsdef/node-uuid.d.ts" />

/// <reference path="../t6s-core/core-backend/scripts/Logger.ts" />

/// <reference path="../t6s-core/core-backend/scripts/server/SourceNamespaceManager.ts" />

var datejs : any = require('datejs');

var DateJS : any = <any>Date;
var uuid : any = require('node-uuid');

var util = require('util');

class NotifierNamespaceManager extends SourceNamespaceManager {

    /**
     * Constructor.
     *
     * @constructor
     * @param {any} socket - The socket.
     */
    constructor(socket : any) {
        super(socket);
        this.addListenerToSocket('Subscribe', this.subscribe);
    }

    /**
     * Subscribe to notifications.
     *
     * @method subscribe
     * @param {Object} params - Params to subscribe to notifications : ???.
     * @param {NotifierNamespaceManager} self - the NotifierNamespaceManager's instance.
     */
	subscribe(params : any, self : NotifierNamespaceManager = null) {
        if(self == null) {
            self = this;
        }

        Logger.debug("listenNotifications Action with params :");
        Logger.debug(params);
    }

	/**
	 * Method called when external message come (from API Endpoints for example).
	 *
	 * @method onExternalMessage
	 * @param {string} from - Source description of message
	 * @param {any} message - Received message
	 */
	onExternalMessage(from : string, message : any) {
		if(from == "notify") {
			//this.sendNewInfoToClient();//TODO
		}
	}
}