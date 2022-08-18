import { useState, useEffect, useCallback } from 'react'

function UseFetch(url) {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true)
        const response = await (await fetch(url)).json();
        setBlogs(response);
        setLoading(false)
    }, [url]);

    useEffect(() => {
        fetchData()
    }, [fetchData])


    return { blogs, loading }

}

export default UseFetch
