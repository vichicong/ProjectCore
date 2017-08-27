const loadUrl = (url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'text'
    xhr.onload = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = url
      document.head.appendChild(link)
      resolve()
    }

    xhr.onerror = reject
    xhr.open('get', url, true)
    xhr.send()
  })

loadUrl('//fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700&subset=vietnamese')
