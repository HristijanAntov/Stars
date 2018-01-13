const baseUrl = 'https://api-fknaanjgow.now.sh'
const authorizationToken = 'jon'

function bindCommonHeaders(token) {
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

export function fetchFeedbackRating() {
  const url = `${baseUrl}/feedback/rating`
  const options = {
    method: 'GET',
    headers: bindCommonHeaders(authorizationToken)
  }

  return fetch(url, options)
    .then(res => res.ok
      ? res.json()
      : Promise.reject({ statusCode: res.status })
    )
    .then(
    payload => ({ ok: true, payload }),
    error => ({ ok: false, statusCode: error.statusCode })
    )
}

export function submitFeedbackRating() {

}
