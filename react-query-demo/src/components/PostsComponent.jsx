import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//Fetch function used to fetch data from an API
const fetchData = async() => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const queryClient = useQueryClient();//Initialize query client

    //useQuery hook to handle data fetching,loading states, error handling, and data caching.
    const {data, error, isLoading} = useQuery('fetchData', fetchData);
    
    // Use useMutation to handle manual refetching of data
    const mutation = useMutation({
        mutationFn: fetchData,
        onSuccess: () => {
            // Invalidate and refetch the fetchData query
            queryClient.invalidateQueries('[fetchData]')
        }
    });
    
    //Handle Loading state
    if(isLoading) return <div>Loading...</div>;
    //Handle error state
    if(error) return <div>Error Loading Data</div>;

    
        //Function to trigger mutation
        const handleRefetch = () => {
            mutation.mutate();
        }

    //Render the fetched data
    return (
        <div>
            <ul>
                {data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ul>
            <button onClick={handleRefetch} disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Refetching...' : 'Refetch Data'}
            </button>
        </div>
    );
};

export default PostsComponent;