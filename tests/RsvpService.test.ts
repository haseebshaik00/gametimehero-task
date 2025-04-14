import { RsvpService } from "../src/services/RsvpService";
import { Logger } from "../src/utils/Logger";
import { Player } from "../src/models/Player";

class MockLogger implements Logger {
  log = jest.fn();
  error = jest.fn();
}

describe("RsvpService", () => {
  let service: RsvpService;
  let logger: Logger;

  beforeEach(() => {
    logger = new MockLogger();
    service = new RsvpService(logger);
  });

  it("Add and Update Player RSVP - Yes", () => {
    const player: Player = { id: "1", name: "TestPlayer" };
    
    service.addOrUpdate(player, "Yes");
    expect(service.getConfirmedAttendees()).toEqual([player]);

    service.addOrUpdate(player, "No");
    expect(service.getConfirmedAttendees()).toEqual([]);

    service.addOrUpdate(player, "Maybe");
    expect(service.getConfirmedAttendees()).toEqual([]);
  });

  it("Count Response", () => {
    service.addOrUpdate({ id: "1", name: "TestAttendee#1" }, "Yes");
    service.addOrUpdate({ id: "2", name: "TestAttendee#2" }, "No");
    service.addOrUpdate({ id: "3", name: "TestAttendee#3" }, "Maybe");
    expect(service.countResponses()).toEqual({
      total: 3,
      confirmed: 1,
      declined: 1,
      maybe: 1
    });
  });
});
