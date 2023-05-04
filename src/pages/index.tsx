import Head from "next/head";
import {NewsArticle, NewsResponse} from "@/modules/NewsArticles";
import {GetServerSideProps} from "next";
import NewsArticleGrid from "@/components/NewsArticleGrid";

interface BreakingNewsPageProps {
    newsArticles: NewsArticle[],
}

let page = 'https://newsapi.org/v2/everything?q=apple&from=2023-05-03&to=2023-05-03&sortBy=popularity&apiKey='

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
    const response = await fetch(page + process.env.NEWS_API_KEY);
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
