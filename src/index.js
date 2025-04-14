"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RsvpService_1 = require("./services/RsvpService");
const Logger_1 = require("./utils/Logger");
const logger = new Logger_1.ConsoleLogger();
const service = new RsvpService_1.RsvpService(logger);
service.addOrUpdate({ id: '1', name: 'Haseeb' }, 'Yes');
service.addOrUpdate({ id: '2', name: 'Alex' }, 'No');
service.addOrUpdate({ id: '3', name: 'Hailey' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Luke' }, 'Yes');
service.addOrUpdate({ id: '3', name: 'Phil' }, 'No');
service.addOrUpdate({ id: '3', name: 'Claire' }, 'Maybe');
service.addOrUpdate({ id: '3', name: 'Lily' }, 'Yes');
console.log(service.getConfirmedAttendees());
console.log(service.countResponses());
