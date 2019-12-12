import axios from 'axios'
import { appendFile } from 'fs'

const scApi = 'https://api.soundcloud.com'
const apiMethod = [
  '/tracks'
]

let apiLink = scApi + apiMethod[0]
let idReq = null

// eslint-disable-next-line no-unused-vars
const cIDerr = Error('Client ID not found.')

export function getTrack (trackId) {
  axios.get(apiLink + trackId + '?' + idReq).then(function (response) {
    appendFile('./tracks.json', response, function (err) {
      if (err) throw err
      console.log('Wrote.')
    })
  })
}

export function setId (id) {
  if (id != null) {
    idReq = id
  }
}
