import { RECEIVE_FEEDBACK_RATING, RECEIVE_CLOSED_PREFERENCE, SUBMITTING } from './actions'


// They are both marked undefined in order to be inferred that the fetches are not receive yet
// Actually we don't need to declare them if they are undefined
// This is just to be more obviously and verbose

const initialState = {
  rating: undefined,
  isFeedbackClosed: undefined,
  submitting: false
}

export default function reducer(state = initialState, action) {

  const {
    type,
    rating,
    isFeedbackClosed,
    submitting
  } = action

  switch (type) {
    case RECEIVE_FEEDBACK_RATING:
      return {
        ...state,
        rating
      }
    case RECEIVE_CLOSED_PREFERENCE:
      return {
        ...state,
        isFeedbackClosed
      }
    case SUBMITTING:
      return {
        ...state,
        submitting
      }
    default:
      return state;
  }
};
