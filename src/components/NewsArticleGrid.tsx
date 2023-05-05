import { FC } from 'react'
import {NewsArticle} from "@/modules/NewsArticles";
import {Col, Row} from "react-bootstrap";
import NewsArticleEntry from "@/components/NewsArticleEntry";

interface NewsArticleGridProps {
    articles: NewsArticle[]
}

const NewsArticleGrid: FC<NewsArticleGridProps> = ({articles}:NewsArticleGridProps) => {
    return (
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles ? articles.map((article, i) => (
                <Col key={article.urlToImage ? article.urlToImage + i : i}>
                    <NewsArticleEntry article={article}/>
                </Col>
            )) : null}
        </Row>
    )
}

export default NewsArticleGrid;