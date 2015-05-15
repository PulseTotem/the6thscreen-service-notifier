/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="../t6s-core/core-backend/scripts/server/SourceServer.ts" />
/// <reference path="../t6s-core/core-backend/scripts/Logger.ts" />

/// <reference path="./NotifierNamespaceManager.ts" />
/// <reference path="./NotifierRouter.ts" />



/**
 * Represents the The 6th Screen Notifier' Service.
 *
 * @class Notifier
 * @extends SourceServer
 */
class Notifier extends SourceServer {



    /**
     * Constructor.
     *
     * @param {number} listeningPort - Server's listening port..
     * @param {Array<string>} arguments - Server's command line arguments.
     */
    constructor(listeningPort : number, arguments : Array<string>) {
        super(listeningPort, arguments);

        this.init();
    }

    /**
     * Method to init the Notifier server.
     *
     * @method init
     */
    init() {
        var self = this;

		this.addAPIEndpoint("notify", NotifierRouter);

        this.addNamespace("Notifier", NotifierNamespaceManager);
    }
}

/**
 * Server's Notifier listening port.
 *
 * @property _NotifierListeningPort
 * @type number
 * @private
 */
var _NotifierListeningPort : number = process.env.PORT || 6009;

/**
 * Server's Notifier command line arguments.
 *
 * @property _NotifierArguments
 * @type Array<string>
 * @private
 */
var _NotifierArguments : Array<string> = process.argv;

var serverInstance = new Notifier(_NotifierListeningPort, _NotifierArguments);
serverInstance.run();