'use strict';

const fields = {
    firstName: { initialState: '' },
    lastName: { initialState: '' },
    email: { initialState: '' },
    year: { initialState: '' },
    make: { initialState: '' },
    model: { initialState: '' }
  };

const projections = {
    'quote.quote.saved' (quotes, event) {
        quotes.add({
            firstName: event.data.firstName,
            lastName: event.data.lastName,
            email: event.data.email,
            year: event.data.year,
            make: event.data.make,
            model: event.data.model
        });
      }
};

module.exports = { fields, projections };