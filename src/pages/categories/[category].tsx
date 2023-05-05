import { FC } from 'react'
import {NewsArticle, NewsResponse} from "@/modules/NewsArticles";
import {GetStaticPaths, GetStaticProps} from "next";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import {useRouter} from "next/router";
import Head from "next/head";
    
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
        props: { newsArticles: newsResponse.articles }, revalidate: 5 * 60
    }
}

const CategoryNewsPage: FC<CategoryNewsPageProps> = ({newsArticles}) => {

    const router = useRouter();
    const categoryName = router.query.category?.toString();

    const title = "Category: " + categoryName

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <h1>{title}</h1>
            <NewsArticleGrid articles={newsArticles} />
        </main>
    </>
}

export default CategoryNewsPage;