import { useEffect } from "react";
import Router from 'next/router'

export default function Backend() {
    useEffect(() => {
        Router.push(`${process.env.blogURLPOST}/admin`)
    }, []);
    return(null)
}
