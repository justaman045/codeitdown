import { useState, useEffect, useCallback } from 'react'

function UseFetch(url) {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true)
        const response = await fetch(url);
        const blogs = await response.json();
        setBlogs(blogs);
        setLoading(false)
    }, [url]);

    useEffect(() => {
        fetchData()
    }, [fetchData])


    return { blogs, loading }

}

export default UseFetch
