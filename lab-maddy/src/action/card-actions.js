import uuid from 'uuid/v4';

export const cardCreate = card => { //an action creator
  card.id = uuid();
  card.timestamp = new Date();
  return {
    type: 'CARD_CREATE',
    payload: card, //might not need trailing comma
  };
};

export const cardUpdate = card => {
  return {
    type: 'CARD_UPDATE',
    payload: card,
  };
};

export const cardDelete = card => {
  return {
    type: 'CARD_DELETE',
    payload: card,
  };
};
//AFTER WRITING this code we need to update our reducers
