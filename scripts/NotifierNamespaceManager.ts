/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */


/// <reference path="../t6s-core/core-backend/scripts/Logger.ts" />

/// <reference path="../t6s-core/core-backend/scripts/server/SourceNamespaceManager.ts" />

/// <reference path="../t6s-core/core-backend/t6s-core/core/scripts/infotype/UserList.ts" />
/// <reference path="../t6s-core/core-backend/t6s-core/core/scripts/infotype/User.ts" />
/// <reference path="../t6s-core/core-backend/t6s-core/core/scripts/infotype/priorities/InfoPriority.ts" />

class NotifierNamespaceManager extends SourceNamespaceManager {

    /**
     * Constructor.
     *
     * @constructor
     * @param {any} socket - The socket.
     */
    constructor(socket : any) {
        super(socket);
        this.addListenerToSocket('Subscribe', function(params, self) { new Subscribe(params, self); });
    }

	/**
	 * Method called when external message come (from API Endpoints for example).
	 *
	 * @method onExternalMessage
	 * @param {string} from - Source description of message
	 * @param {any} message - Received message
	 */
	onExternalMessage(from : string, message : any) {
		if(from == "notify" && typeof(message.username) != "undefined") {
			var userList : UserList = new UserList();
			userList.setId(uuid.v1());

			var user = new User();
			user.setId(uuid.v1());
			user.setPriority(InfoPriority.HIGH);
			user.setUsername(message.username);

			userList.addUser(user);

			this.sendNewInfoToClient(userList);
		}
	}
}