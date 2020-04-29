import config from '../config'


const thoughtApiService = {
  getthoughts() {
    return fetch(`${config.API_ENDPOINT}/thoughts`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getthought(thoughtID) {
    return fetch(`${config.API_ENDPOINT}/thoughts/${thoughtID}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postthought(title, content, tag) {
    return fetch(`${config.API_ENDPOINT}/thoughts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        tag,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getthoughtComments(thoughtId) {
    return fetch(`${config.API_ENDPOINT}/thoughts/${thoughtId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(thoughtid, thought_text, date_created) {
    console.log(thoughtid)
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        thought_id: thoughtid,
        thought_text,
        date_created,
      }),
    })

      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default thoughtApiService