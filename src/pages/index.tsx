
import Head from "next/head";
import {NewsArticle, NewsResponse} from "@/modules/NewsArticles";
import {GetServerSideProps} from "next";
import NewsArticleGrid from "@/components/NewsArticleGrid";

interface BreakingNewsPageProps {
    newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
    await new Promise(r => setTimeout(r, 3000))
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-03&sortBy=publishedAt&apiKey=` + process.env.NEWS_API_KEY);
    const newsResponse: NewsResponse = await response.json();
    return {
        props: { newsArticles: newsResponse.articles }
    }
}

export default function BreakingNewsPage({newsArticles}: BreakingNewsPageProps) {
  return (
      <>
          <Head>
             <title>Breaking news </title>
            </Head>
        <main>
         <h1>Breaking News</h1>
            <NewsArticleGrid articles={newsArticles} />
        </main>
      </>
  )
}
