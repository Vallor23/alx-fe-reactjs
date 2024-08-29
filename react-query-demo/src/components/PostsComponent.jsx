import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//Fetch function used to fetch data from an API
const fetchPosts = async() => {
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const queryClient = useQueryClient();//Initialize query client

    //useQuery hook to handle data fetching,loading states, error handling, and data caching.
    const {data, isError, isLoading,isFetching} = useQuery({
        queryKey: ['fetchData'],
        queryFn: fetchPosts,
        staleTime: 6000,//Data remains fresh for 1 minute
        cacheTime: 30000,//Data remains in the memory for 5 minutes after it becomes inactive
        refetchOnWindowFocus: false,//disable automatic refetching on window focus
        keepPreviousData: true//keep previous data while new data is being fetched
    });

    // Use useMutation to handle manual refetching of data
    const mutation = useMutation({
        mutationFn: fetchPosts,
        onSuccess: () => {
            // Invalidate and refetch the fetchData query
            queryClient.invalidateQueries('[fetchData]')
        }
    });
    
    //Handle Loading state
    if(isLoading) return <div>Loading...</div>;
    //Handle error state
    if(isError) return <div>Error Loading Data</div>;

    
        //Function to trigger mutation
        const handleRefetch = () => {
            mutation.mutate();
        }
        console.log(data)//debug
    //Render the fetched data
    return (
        <div>
            <ul>
                {data.map(item => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </ul>
            <button onClick={handleRefetch} disabled={mutation.isLoading}>
                {mutation.isLoading || isFetching ? 'Refetching...' : 'Refetch Data'}
            </button>
        </div>
    );
};

export default PostsComponent;