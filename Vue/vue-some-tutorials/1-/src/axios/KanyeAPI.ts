import API from '@/axios/API'

export default {
  getQuote() {
    return API().get('/')
  },
  createPost(data: any) {
    return API('https://jsonplaceholder.typicode.com')
      .post('/posts', data)
  }
}