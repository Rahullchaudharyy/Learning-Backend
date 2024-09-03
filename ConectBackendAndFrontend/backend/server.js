import express from 'express'

const app = express()

app.get('/api/Data',(req,res)=>{
    const Data = [
        {
          "id": "1",
          "title": "Introduction to JavaScript",
          "content": "JavaScript is a versatile programming language primarily used for creating interactive web pages. It is essential for modern web development."
        },
        {
          "id": "2",
          "title": "Understanding React",
          "content": "React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience."
        },
        {
          "id": "3",
          "title": "Getting Started with Node.js",
          "content": "Node.js is a runtime environment that allows you to execute JavaScript code on the server side. It’s commonly used for building scalable network applications."
        },
        {
          "id": "4",
          "title": "Exploring CSS Grid",
          "content": "CSS Grid Layout is a two-dimensional layout system for the web. It allows you to design web pages using a grid-based approach with rows and columns."
        },
        {
          "id": "5",
          "title": "Basics of HTML",
          "content": "HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure of a webpage by using various tags and elements."
        }
      ]
      
   res.send(Data)
})


app.listen(3000,()=>{
    console.log('server started on 3000 ')
})