import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Result, SpaceNews } from '../interfaces/spaceflight'
import SingleArticle from '../components/SingleArticle'

function Home() {
  // variabile di stato che ospiterà l'array di articoli
  const [allTheArticles, setAllTheArticles] = useState<Result[]>([])

  useEffect(() => {
    getAllArticles()
  }, [])

  const getAllArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles'
      )
      if (response.ok) {
        // procedo a prelevare il JSON della response
        const data: SpaceNews = await response.json()
        setAllTheArticles(data.results)
      } else {
        throw new Error('Errore nel recupero degli articoli')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Container>
      <h1>Space Flight News 🚀</h1>
      <Row>
        {/* rendering condizionale per far apparire tante col quanti sono gli articoli */}
        {allTheArticles.map((art) => (
          <Col xs={12} md={4} lg={3} key={art.id}>
            <SingleArticle articleDetails={art} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
