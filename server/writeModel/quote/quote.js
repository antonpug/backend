'use strict';

const initialState = {
    isAuthorized: {
        commands: {save: { forPublic: true }},
        events: {saved: { forPublic: true }}
    },
    firstName: '',
    lastName: '',
    email: '',
    make: '',
    year: '',
    model: ''
};

const commands = {
    save(quote, command) {
        quote.events.publish('saved', {
            firstName: command.data.firstName,
            lastName: command.data.lastName,
            email: command.data.email,
            year: command.data.year,
            make: command.data.make,
            model: command.data.model
        });
    }
};

const events = {
    saved(quote, event) {
        quote.setState({
            firstName: event.data.firstName,
            lastName: event.data.lastName,
            email: event.data.email,
            year: event.data.year,
            make: event.data.make,
            model: event.data.model
        });
      }  
};

module.exports = { initialState, commands, events };