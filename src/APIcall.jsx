export default function getTopArticles(category) {
    const url = 'https://newsapi.org/v2/everything?' +
         `q=${category.toLowerCase()}&`+`pageSize=100&`+`apiKey=${import.meta.env.VITE_API_KEY}`
    var req = new Request(url)
    return fetch(req)
        .then(resp => {
        if (!resp.ok) {
            throw new Error ('Could not fetch')
        }
        if(resp.status === 200) {
            return resp.json()
        }
       else {
          return resp;
        }
        
        })
}


