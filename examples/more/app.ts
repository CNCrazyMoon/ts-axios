import axios from '../../src/index'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// document.cookie = 'a=b'
//
// axios
//   .get('/more/get')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(() => {
//     //
//   })

// axios
//   .post(
//     'http://127.0.0.1:8088/more/server2',
//     {},
//     {
//       withCredentials: true
//     }
//   )
//   .then(res => {
//     console.log(res)
//   })
//   .catch(() => {
//     //
//   })

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance
//   .get('/more/get')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(() => {
//     //
//   })

// const instance = axios.create()

// function calcPercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1.0) / total
// }

// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start()
//       return config
//     })
//   }

//   const setupUpdateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       console.log(e)
//       NProgress.set(calcPercentage(e.loaded, e.total))
//     }
//     instance.defaults.onDownloadProgress = update
//     instance.defaults.onUploadProgress = update
//   }

//   const setupStopProgress = () => {
//     instance.interceptors.response.use(
//       res => {
//         NProgress.done()
//         return res
//       },
//       err => {
//         NProgress.done()
//         return Promise.reject(err)
//       }
//     )
//   }

//   setupStartProgress()
//   setupUpdateProgress()
//   setupStopProgress()
// }

// loadProgressBar()

// const downloadEl = document.getElementById('download')

// downloadEl!.addEventListener('click', () => {
//   instance.get('https://pic2.zhimg.com/80/v2-d6c87da3380632a288f6eb3e184f078d_hd.jpg')
// })

// const uploadEl = document.getElementById('upload')

// uploadEl.addEventListener('click', () => {
//   const data = new FormData()
//   const fileEl = document.getElementById('file') as HTMLInputElement

//   if (fileEl.files) {
//     data.append('file', fileEl.files[0])
//     instance.post('/more/upload', data)
//   }
// })

axios
  .post(
    '/more/post',
    {
      a: 1
    },
    {
      auth: {
        username: 'tom',
        password: 'cat1'
      }
    }
  )
  .then(res => {
    console.log(res)
  })
  .catch(() => {
    //
  })
