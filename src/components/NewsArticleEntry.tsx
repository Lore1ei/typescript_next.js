import { FC } from 'react'
import {NewsArticle} from "@/modules/NewsArticles";
import {Card} from "react-bootstrap";
    
interface NewsArticleEntryProps {
    article: NewsArticle
}

const NewsArticleEntry: FC<NewsArticleEntryProps> = ({article : {title, description, url, urlToImage}}: NewsArticleEntryProps) => {
    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined

    return (
        <>
            <a href={url}>
                <Card className="h-100">
                    <Card.Img src={validImageUrl} alt='' variant='top'/>
                    <Card.Body >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </>
    )
}

export default NewsArticleEntry;