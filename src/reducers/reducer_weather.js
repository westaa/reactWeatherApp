import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
    //concat doesnt mutate state, it returns a new version of the state, where as .push method would mutate the state
  }
  return state;
}
