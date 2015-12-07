/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
import {Thing} from '../../sqldb';

var ThingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ThingEvents.setMaxListeners(0);

// Model events
const events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Thing.hook(e, emitEvent(event));
}

function emitEvent (event) {
  return (doc, options, done) => {
    ThingEvents.emit(event + ':' + doc._id, doc);
    ThingEvents.emit(event, doc);
    done(null);
  }
}

export default ThingEvents;
