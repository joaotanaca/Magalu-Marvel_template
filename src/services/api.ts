import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    apikey: 'ecd3f9b869888b0bbb3af9e356a7e434',
    limit: 20
  }
})
