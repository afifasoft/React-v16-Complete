import axios from 'axios';

const KEY = 'AIzaSyDLIzilolEkjJMxBhuPEm2JNip7kAIR6fE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
