import { RsvpService } from './services/RsvpService';
import { ConsoleLogger } from './utils/Logger';

const logger = new ConsoleLogger();
const service = new RsvpService(logger);

console.log("Attendees Response Logs:")
service.addOrUpdate({ id: '1', name: 'Haseeb' }, 'Yes');
service.addOrUpdate({ id: '2', name: 'Alex' }, 'No');
service.addOrUpdate({ id: '3', name: 'Hailey' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Luke' }, 'Yes');
service.addOrUpdate({ id: '3', name: 'Phil' }, 'No');
service.addOrUpdate({ id: '3', name: 'Claire' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Lily' }, 'Yes');

console.log("\nConfimed Attendees of the Event:")
console.log(service.getConfirmedAttendees());

console.log("\nResponses Count:")
console.log(service.countResponses());