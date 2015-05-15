/**
 * @author Christian Brel <ch.brel@gmail.com>
 */

/// <reference path="../t6s-core/core-backend/scripts/server/RouterItf.ts" />
/// <reference path="../t6s-core/core-backend/scripts/Logger.ts" />

/**
 * NotifierRouter class.
 *
 * @class NotifierRouter
 * @extends RouterItf
 */
class NotifierRouter extends RouterItf {

	/**
	 * Constructor.
	 */
	constructor() {
		super();
	}

	/**
	 * Method called during Router creation.
	 *
	 * @method buildRouter
	 */
	buildRouter() {
		// define the '/' route
		this.router.post('/', this.newNotification);
	}

	/**
	 * New Notification.
	 *
	 * @method newNotification
	 * @param {Express.Request} req - Request object.
	 * @param {Express.Response} res - Response object.
	 */
	newNotification(req : any, res : any) {


		res.end();
	}
}