import { FC } from 'react'
import {NewsArticle, NewsResponse} from "@/modules/NewsArticles";
import {GetStaticPaths, GetStaticProps} from "next";
import NewsArticleGrid from "@/components/NewsArticleGrid";
    
interface CategoryNewsPageProps {
    newsArticles: NewsArticle[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categorySlugs = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];

    const paths = categorySlugs.map(slug => ({params: {category: slug} }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({params}) => {
    const category = params?.category?.toString();
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
    const newsResponse: NewsResponse = await response.json();
    return {
        props: { newsArticles: newsResponse.articles }
    }
}

const CategoryNewsPage: FC<CategoryNewsPageProps> = ({newsArticles}) => {
    return <>
        <main>
            <NewsArticleGrid articles={newsArticles} />
        </main>
    </>
}

export default CategoryNewsPage;