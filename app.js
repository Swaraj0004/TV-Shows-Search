const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = { params : { q: searchTerm }}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`,config)
    makeImages(res.data)

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const imgUrl = result.show.image.medium
            const img = document.createElement('IMG')
            img.src = imgUrl
            document.body.append(img)
        }
    }
}