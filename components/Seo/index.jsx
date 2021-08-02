import data from '../../FakeData/index.json'
import Head from 'next/head'

export default function SeoOptimised({ curPage, Description }) {
    let defaultDesc = 'I am a Student Developer who writes Technical Blogs and Develop Quality Products free for everyone.';
    let defaultKeywords = '';
    let desc = '';
    if (Description === undefined) {
        desc = defaultDesc;
    } else {
        desc = Description;
    }
    return (
        <Head>
            <title>{curPage} | Blogs for Developers | {data.name}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
                name="description"
                content={desc}
                itemProp="description"
            />
            <meta
                property="og:title"
                content={`${curPage} | Blogs for Developers | ${data.name}`}
                itemProp="name"
            />
            <meta
                property="og:site_name"
                content={data.name}
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={data.currentDomain}
            />
            <meta
                name="image"
                property="og:image"
                content={data.ownerImage}
                itemProp="image"
            />
            <meta
                property="og:description"
                content={desc}
            />
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                name="twitter:title"
                content={`${curPage} | Blogs for Developers | ${data.name}`}
            />
            <meta
                name="twitter:description"
                content={desc}
            />
            <meta
                name="twitter:image"
                content={data.ownerImage}
            />
        </Head>
    )
}