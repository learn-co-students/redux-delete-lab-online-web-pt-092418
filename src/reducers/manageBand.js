export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, action.name] }
    switch(action.type) {
      case 'DELETE_BAND':
        return state.filter(band => band.id !== action.bandId)
    }
    default:
      return state;
  }
};
