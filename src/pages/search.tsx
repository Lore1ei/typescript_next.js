import {FC, FormEvent, useState} from 'react'
import Head from "next/head";
import {NewsArticle} from "@/modules/NewsArticles";
import {Button, Form} from "react-bootstrap";


const SearchNews: FC = ({}) => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get('searchQuery')?.toString().trim();

        if (searchQuery){
            alert(searchQuery)
        }
    }

    return (
        <>
            <Head>
                <title>Next js </title>
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="description" content="Free Web tutorials" />
            </Head>
            <main>
                <h1>Search News</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="search-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control name="searchQuery" placeholder="Search News"/>
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={searchResultsLoading}>Search</Button>
                </Form>
            </main>
        </>
    )
}

export default SearchNews;