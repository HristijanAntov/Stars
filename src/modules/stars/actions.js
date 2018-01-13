import * as Api from '../../services/api'

export const RECEIVE_FEEDBACK_RATING = 'RECEIVE_FEEDBACK_RATING'
export const RECEIVE_CLOSED_PREFERENCE = 'RECEIVE_CLOSED_PREFERENCE'
export const SUBMITTING = 'SUBMITTING'

const receiveSubmitting = submitting => ({
  type: SUBMITTING,
  submitting
})

const receiveFeedbackRating = ({ rating }) => ({
  type: RECEIVE_FEEDBACK_RATING,
  rating
})

const receiveClosedPreference = ({ closed: isFeedbackClosed }) => ({
  type: RECEIVE_CLOSED_PREFERENCE,
  isFeedbackClosed
})

export function ping() {
  return () => console.log('Ping...')
}

export function fetchFeedbackRating() {
  return dispatch => Api.fetchFeedbackRating().then(({ ok, payload, statusCode }) => {
    if (ok) {
      dispatch(receiveFeedbackRating(payload))
    } else {
      if (statusCode === 404) {
        dispatch(receiveFeedbackRating({ rating: -1 })) //  This means the user never rated before
      }
      // TODO: should handle real error somehow
    }
  })
}

export function fetchClosedPreference() {
  return dispatch => Api.fetchClosedPreference().then(({ ok, payload, statusCode }) => {
    if (ok) {
      dispatch(receiveClosedPreference(payload))
    } else {
      console.log(statusCode)  // TODO: should handle error somehow
    }
  })
}

export function submitFeedbackRating(rating) {
  return dispatch => {

    dispatch(receiveSubmitting(true))
    
    Api.submitFeedbackRating({ rating }).then(({ ok, statusCode }) => {
  
      if (ok) {
        dispatch(receiveFeedbackRating({ rating }))
      } else {
        console.log(statusCode) // TODO: should handle error somehow
      }

      dispatch(receiveSubmitting(false))

    })
  }
}