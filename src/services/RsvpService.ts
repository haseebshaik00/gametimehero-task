import { RsvpEntry, RsvpStatus } from "../models/RsvpEntry";
import { Player } from "../models/Player";
import { Logger } from "../utils/Logger";

export class RsvpService {
  private rsvps: Map<string, RsvpEntry> = new Map();
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  addOrUpdate(player: Player, status: RsvpStatus): void {
    this.rsvps.set(player.id, { player, status });
    this.logger.log(`RSVP updated for ${player.name}: ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return [...this.rsvps.values()]
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  countResponses() {
    let confirmed = 0, declined = 0, maybe = 0;
    for (const entry of this.rsvps.values()) {
      switch (entry.status) {
        case "Yes": confirmed++; break;
        case "No": declined++; break;
        case "Maybe": maybe++; break;
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
