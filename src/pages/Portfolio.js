import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Portfolio() {
    return (
        <div className="portfolio-main">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/img/movie-db.png" />
            <Card.Body>
                <Card.Title>TV Database</Card.Title>
                <Card.Text>
                Used an API from themoviedatabase.org to curate TV shows that are currently on air
                </Card.Text>
                <Button variant="primary"><a href="https://brave-dijkstra-1c6906.netlify.app/" target="_blank" className="portfolio-link">Website</a></Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="portfolio-card">
            <Card.Img variant="top" src="/img/monstergame.png" />
            <Card.Body>
                <Card.Title>JavaScript Game</Card.Title>
                <Card.Text>
                Monster game written in JavaScript
                </Card.Text>
                <Button variant="primary"><a href="https://sharp-wiles-55435c.netlify.app" target="_blank" className="portfolio-link">Website</a></Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="portfolio-card">
            <Card.Img variant="top" src="/img/todolist.png" />
            <Card.Body>
                <Card.Title>Todo List</Card.Title>
                <Card.Text>
                A classic todo list written in JavaScript. Can save your list in browser's local storage
                </Card.Text>
                <Button variant="primary"><a href="https://modest-clarke-77348c.netlify.app/" target="_blank" className="portfolio-link">Website</a></Button>
            </Card.Body>
            </Card>
        </div>
    )
}
