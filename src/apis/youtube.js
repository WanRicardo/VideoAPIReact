import axios from 'axios'

const KEY = 'AIzaSyD99l63Kf0DqefknASqBHqPMrYxvlxXyrI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})