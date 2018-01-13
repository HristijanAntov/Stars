const baseUrl = 'https://api-fknaanjgow.now.sh'
const authorizationToken = 'jon-antovskan' // I just change names to test from scratch

// Generic Response handlers
const emptyResponse = res => res.ok ? Promise.resolve() : Promise.reject({ statusCode: res.status })
const transformToJson = res => res.ok ? res.json() : Promise.reject({ statusCode: res.status })
const formatJsonPayload = payload => ({ ok: true, payload })
const formatSuccess = () => ({ ok: true })
const handleError = error => ({ ok: false, statusCode: error.statusCode })

// Common Headers

const bindCommonHeaders = token => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
})

const urls = {
  feedbackRating: `${baseUrl}/feedback/rating`,
  closedPreference: `${baseUrl}/feedback/closed`
}


export function fetchFeedbackRating() {
  const url = urls.feedbackRating
  const options = {
    method: 'GET',
    headers: bindCommonHeaders(authorizationToken)
  }

  return fetch(url, options)
    .then(transformToJson)
    .then(formatJsonPayload, handleError)
}

export function fetchClosedPreference() {
  const url = urls.closedPreference
  const options = {
    method: 'GET',
    headers: bindCommonHeaders(authorizationToken)
  }

  return fetch(url, options)
    .then(transformToJson)
    .then(formatJsonPayload, handleError)
}

export function submitFeedbackRating(payload) {
  const url = urls.feedbackRating
  const options = {
    method: 'POST',
    headers: bindCommonHeaders(authorizationToken),
    body: JSON.stringify(payload)
  }

  return fetch(url, options)
    .then(emptyResponse)
    .then(formatSuccess, handleError)
}
