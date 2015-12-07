/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import {ThingEvents} from './thing/events';

// Model events to emit
const events = ['save', 'remove'];

export default function register (socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    const event = events[i];
    let listener = createListener('thing:' + event, socket);

    ThingEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
}

function createListener (event, socket) {
  return (doc) => {
    socket.emit(event, doc);
  };
}

function removeListener (event, listener) {
  return () => {
    ThingEvents.removeListener(event, listener);
  }
}
