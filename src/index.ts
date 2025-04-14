import { RsvpService } from './services/RsvpService';
import { ConsoleLogger } from './utils/Logger';

const logger = new ConsoleLogger();
const service = new RsvpService(logger);

service.addOrUpdate({ id: '1', name: 'Haseeb' }, 'Yes');
service.addOrUpdate({ id: '2', name: 'Alex' }, 'No');
service.addOrUpdate({ id: '3', name: 'Hailey' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Luke' }, 'Yes');
service.addOrUpdate({ id: '3', name: 'Phil' }, 'No');
service.addOrUpdate({ id: '3', name: 'Claire' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Lily' }, 'Yes');

console.log("")
console.log(service.getConfirmedAttendees());
console.log(service.countResponses());