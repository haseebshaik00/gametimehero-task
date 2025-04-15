import { RsvpService } from './services/RsvpService';
import { ConsoleLogger } from './utils/Logger';

const logger = new ConsoleLogger();
const service = new RsvpService(logger);

(window as any).submitRsvp = () => {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const statusSelect = document.getElementById('status') as HTMLSelectElement;

  const name = nameInput.value.trim();
  const status = statusSelect.value as "Yes" | "No" | "Maybe";

  if (!name) return;

  service.addOrUpdate({ id: name.toLowerCase(), name }, status);
  nameInput.value = '';
  statusSelect.selectedIndex = 0;
};

(window as any).fetchAttendees = () => {
  const attendees = service.getConfirmedAttendees();
  const list = document.getElementById('attendeeList')!;

  if (attendees.length === 0) {
    list.innerHTML = `<em>No Attendees yet!</em>`;
  } else {
    list.innerHTML = attendees.map(p => `<li>${p.name}</li>`).join('');
  }
};
