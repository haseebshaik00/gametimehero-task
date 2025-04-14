"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsvpService = void 0;
class RsvpService {
    constructor(logger) {
        this.rsvps = new Map();
        this.logger = logger;
    }
    addOrUpdate(player, status) {
        this.rsvps.set(player.id, { player, status });
        this.logger.log(`RSVP updated for ${player.name}: ${status}`);
    }
    getConfirmedAttendees() {
        return [...this.rsvps.values()]
            .filter(entry => entry.status === "Yes")
            .map(entry => entry.player);
    }
    countResponses() {
        let confirmed = 0, declined = 0, maybe = 0;
        for (const entry of this.rsvps.values()) {
            switch (entry.status) {
                case "Yes":
                    confirmed++;
                    break;
                case "No":
                    declined++;
                    break;
                case "Maybe":
                    maybe++;
                    break;
            }
        }
        return {
            total: this.rsvps.size,
            confirmed,
            declined,
            maybe
        };
    }
}
exports.RsvpService = RsvpService;
