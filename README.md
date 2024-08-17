# NewsReader

### Abstract
- Using the NewsAPI, the main page fetches the top 100 most recent articles with the news category being 'general'. User can use the category drop-down to get different categories of top articles. Using the filter search, the user can narrow down the articles by article title. Each article is clickable, taking the user to a detail page with more article information.  

### Installation Instructions for Front-End
1. Clone the repository to your local machine.
2. cd into the directory
3. Run `npm install`
4. Using the terminal, run `npm run dev` to start the server
5. Navigate to `http://localhost:5173/`

### API
- Get your API key here: (https://newsapi.org/)
- Replace `import.env.VITE_API_KEY` in `APIcall.jsx` with your own API key

### Technologies Used
- React, React Router, Cypress, JSX, CSS

### Screenshot of App
![Screenshot]()

### Link to Project Board
[Project Board](https://github.com/users/peterkimpk1/projects/8/views/1)

### Reflections
*Wins*
1. Dividing results into multiple pages on load
2. Select drop-down allows for easier fetching of different articles

*Challenges*
1. Implementing responsive design for different screen sizes
2. top-headlines endpoint not having images

### Contributor(s)
- Peter Kim peterkim.pk1@gmail.com

