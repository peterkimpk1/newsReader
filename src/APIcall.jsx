export default function getTopArticles() {
    const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + `apiKey=${import.meta.env.VITE_API_KEY}`
    var req = new Request(url)
    return fetch(req)
        .then(resp => {
        if (!resp.ok) {
            throw new Error ('Could not fetch')
        }
        return resp.json()
        })
}


