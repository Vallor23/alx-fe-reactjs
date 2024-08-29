import { useQuery } from "@tanstack/react-query";

//Fetch function used to fetch data from an API
const fetchData = async() => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    //useQuery hook to handle data fetching,loading states, error handling, and data caching.
    const {data, error, isLoading} = useQuery('fetchData', fetchData);
    //Handle Loading state
    if(isLoading) return <div>Loading...</div>;
    //Handle error state
    if(error) return <div></div>;

    //Render the fetched data
    return (
        <div>
            <ul>
                {data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ul>
            {/* <button onClick={}></button> */}
        </div>
    );
};

export default PostsComponent;