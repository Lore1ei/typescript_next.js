import { useRouter } from "next/router";

export default function Home({ post }) {
    const router = useRouter();

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button
                onClick={() => {
                    router.push({
                        href: router.pathname,
                        query: { page: Math.round(Math.random() * 10) },
                    });
                }}
            >
                Fetch another post randomly
            </button>
        </>
    );
}


export const getServerSideProps = async (context) => {
    const defaultPage = 1;
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + (context.query.page || defaultPage)
    );
    const data = await response.json();
    return {
        props: { post: data },
    };
};