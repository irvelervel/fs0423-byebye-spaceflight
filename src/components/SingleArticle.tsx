import { Card } from 'react-bootstrap'
import { Result } from '../interfaces/spaceflight'
import { Link } from 'react-router-dom'

interface SingleArticleProps {
  articleDetails: Result
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Card>
      <Link to={'/' + props.articleDetails.id}>
        <Card.Img variant="top" src={props.articleDetails.image_url} />
      </Link>
      <Card.Body>
        <Card.Title>{props.articleDetails.title}</Card.Title>
        <Card.Text>{props.articleDetails.summary}</Card.Text>
        <Card.Text>
          {props.articleDetails.published_at} | {props.articleDetails.news_site}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle
