// Fetch API
createFetchButton()

function createFetchButton() {
  const buttonEl = document.createElement('button')
  buttonEl.textContent = '获取数据'
  buttonEl.addEventListener('click', () => {
    getCountryDataFetchWay()
  })
  const divEl = document.createElement('div')
  divEl.insertAdjacentElement('beforeend', buttonEl)
  document.body.insertAdjacentElement('beforeend', divEl)
}

function fetchJson(url) {
  return fetch(url)
  .then(response => {
    if (!response.ok) return response.json().then(data => {
      throw new Error(data.message)
    })

    return response.json()
  })
}

function getCountryDataFetchWay() {
  // australia
  fetchJson(getCountryDataUrlByName('china'))
  .then(data => {
    const country = data?.[0]
    console.log(country)

    showCountryInHtml(country)

    // 获取邻国
    const borderCode = country.borders?.[0]
    if (!borderCode) throw new Error(`${country.name} 没有邻国`)

    return fetchJson(getCountryDataUrlByCode(borderCode))
  })
  .then(data => showCountryInHtml(data))
  .catch(error => {
    console.error(error)
    renderError(error)
  })
}

function renderError(error) {
  const pEl = createParagraphNode(error)
  document.body.insertAdjacentElement('afterbegin', pEl)
}

/*
// XMLHttpRequest
getCountryDataOldWay('china')

// callback hell
setTimeout(() => {
  console.log('1 秒后')
  setTimeout(() => {
    console.log('2 秒后')
    setTimeout(() => {
      console.log('3 秒后')
      setTimeout(() => {
        console.log('4 秒后')
        setTimeout(() => {
          console.log('5 秒后')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
*/

function getCountryDataOldWay(countryName) {
  // 获取国家
  const request = new XMLHttpRequest()
  request.open('GET', getCountryDataUrlByName(countryName))
  request.send()
  request.addEventListener('load', () => {
    const [country] = JSON.parse(request.responseText)
    console.log(`${countryName} 数据`, country)

    // 将国家数据显示在页面中
    showCountryInHtml(country)

    // 获取第一个邻国
    const borderCode = country.borders?.[0]
    if (!borderCode) return

    drawSeparatorLineInHtml()
    const request2 = new XMLHttpRequest()
    request2.open('GET', getCountryDataUrlByCode(borderCode))
    request2.send()
    request2.addEventListener('load', () => {
      const border = JSON.parse(request2.responseText)
      console.log(`${borderCode} 数据`, border)

      showCountryInHtml(border)
    })
  })
}

function drawSeparatorLineInHtml() {
  const hrNode = document.createElement('hr')
  document.body.insertAdjacentElement('beforeend', hrNode)
}

function showCountryInHtml(countryData) {
  const imgNode = createImgNode(countryData.flag)
  document.body.insertAdjacentElement('beforeend', imgNode)

  const nameNode = createParagraphNode(`名称：${countryData.name}`)
  document.body.insertAdjacentElement('beforeend', nameNode)

  const regionNode = createParagraphNode(`区域：${countryData.region}`)
  document.body.insertAdjacentElement('beforeend', regionNode)

  const populationNode = createParagraphNode(`人口：${countryData.population / 1_000_000} 百万`)
  document.body.insertAdjacentElement('beforeend', populationNode)

  const languageNode = createParagraphNode(`语言：${countryData.languages[0].name}`)
  document.body.insertAdjacentElement('beforeend', languageNode)

  const currencyNode = createParagraphNode(`货币：${countryData.currencies[0].name}`)
  document.body.insertAdjacentElement('beforeend', currencyNode)
}

function createParagraphNode(content) {
  const p = document.createElement('p')
  p.textContent = content
  return p
}

function createImgNode(src) {
  const img = document.createElement('img')
  img.src = src
  return img
}

function getCountryDataUrlByName(countryName) {
  return `https://restcountries.com/v2/name/${countryName}`
}

function getCountryDataUrlByCode(countryCode) {
  return `https://restcountries.com/v2/alpha/${countryCode}`
}
