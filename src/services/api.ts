import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    apikey: '08c4a6271e652b0b74bee6a067c27eee',
    limit: 20
  }
})
// other key public 08c4a6271e652b0b74bee6a067c27eee
