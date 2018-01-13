import * as api from '../../services/api'

export function ping() {
  return () => console.log('Ping...')
}

export function fetchFeedbackRating() {
  return dispatch => api.fetchFeedbackRating().then(({ ok, payload, statusCode }) => {
    if (ok) {
      console.log(ok, payload)
    } else {
      console.log(statusCode)
    }
  })
}