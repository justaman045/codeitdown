import data from '../../FakeData/index.json'
import Head from 'next/head'

export default function SeoOptimised({ curPage, Description, image }) {
    let defaultDesc = 'I am a Student Developer who writes Technical Blogs and Develop Quality Products free for everyone.';
    let defaultKeywords = '';
    let desc = '';
    if (Description === undefined) {
        desc = defaultDesc;
    } else {
        desc = Description;
    }
    let curDate = new Date();
    let month;
    if (curDate.getMonth() < 10){
        month = `0${curDate.getMonth()}`
    } else {
        month = `${curDate.getMonth()}`
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
            />
            <meta
                name="keywords"
                content={String(desc).split(" ")}
            />
            <meta
                property="og:title"
                content={`${curPage} | Blogs for Developers | ${data.name}`}
            />
            <meta
                property="og:site_name"
                content={data.name}
            />
            <meta property="og:type" content="article" />
            <meta
                property="og:url"
                content={data.currentDomain}
            />
            <meta
                property="og:image"
                content={image || 'https://codeitdown.ml'}
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
                content={image || 'https://codeitdown.ml'}
            />
            <meta name="robots" content="follow, index" />
            <meta property="og:site_name" content={`${data.name}`} />
            <meta name="twitter:site" content="https://twitter.com/coderaman07" />
            <meta property="article:published_time" content={`${curDate.getFullYear()}-${month}-${curDate.getDate()}T00:00:00.000Z`} />
            <meta property="article:modified_time" content={`${curDate.getFullYear()}-${month}-${curDate.getDate()}T00:00:00.000Z`} />
        </Head>
    )
}