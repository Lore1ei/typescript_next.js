import {FC, FormEvent, useState} from 'react'
import Head from "next/head";
import {NewsArticle} from "@/modules/NewsArticles";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import NewsArticleGrid from "@/components/NewsArticleGrid";


const SearchNews: FC = ({}) => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get('searchQuery')?.toString().trim();

        if (searchQuery){
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch('/api/search-news?q=' + searchQuery);
                const articles: NewsArticle[] = await response.json();
                setSearchResults(articles)
            }catch (error){
                console.log(error);
                setSearchResultsLoadingIsError(true);
            }finally {
                setSearchResultsLoading(false)
            }
        }
    }

    return (
        <>
            <Head>
                <title key="title">Search Next js </title>
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="description" content="Free Web tutorials" />
            </Head>
            <main>
                <Alert>Api Next.js Routes</Alert>
                <h1>Search News</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="search-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control name="searchQuery" placeholder="Search News"/>
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={searchResultsLoading}>Search</Button>
                </Form>
                <div className="d-flex flex-column align-items-center">
                    {searchResultsLoading && <Spinner animation="border"/>}
                    {searchResultsLoadingIsError && <p>Something went wrong</p>}
                    {searchResults?.length === 0 && <p>Nothing found try a different query</p>}
                    {searchResults && <NewsArticleGrid articles={searchResults} />}
                </div>
            </main>
        </>
    )
}

export default SearchNews;