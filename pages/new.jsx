import { useEffect } from "react";
import Router from 'next/router'

export default function NewBlog() {
    useEffect(() => {
        Router.push(`${process.env.blogURLPOST}/new`)
    }, []);
    return (null)
}
