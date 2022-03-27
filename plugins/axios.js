export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    
    $axios.onError(error => {
        store.dispatch('validation/setErrors', error.response.data.error.details.errors)

        // nuxtError({
        //     statusCode: error.response.status,
        //     message: error.message,
        //   });
        //   return Promise.resolve(false);
    })
  }