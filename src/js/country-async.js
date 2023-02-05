getCountryDataOldWay('china', () => {
  drawSeparatorLineInHtml()
  getCountryDataOldWay('usa')
})

function drawSeparatorLineInHtml() {
  const hrNode = document.createElement('hr')
  document.body.insertAdjacentElement('beforeend', hrNode)
}

function getCountryDataOldWay(countryName, callback) {
  const request = new XMLHttpRequest()
  request.open('GET', getCountryDataUrl(countryName))
  request.send()
  request.addEventListener('load', () => {
    const [china] = JSON.parse(request.responseText)
    console.log(`${countryName} 数据`, china)

    showCountryInHtml(china)

    if (typeof callback === 'function') callback()
  })
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

function getCountryDataUrl(countryName) {
  return `https://restcountries.com/v2/name/${countryName}`
}
