import data from '../Data/index.json';
const Sitemap = () => { };
const domainName = data.currentDomain;

let routeName = [
    `${data.currentDomain}`,
    `${data.currentDomain}/aboutMe`,
    `${data.currentDomain}/blogs`,
    `${data.currentDomain}/hashtags`,
    `${data.currentDomain}/categories`,
]

const toUrl = (route) =>
    `<url>
        <loc>${domainName}/hashtag/${route.Hashtag}</loc>
        <changefreq> daily </changefreq>
        <priority> 1 </priority>
        <lastmod> ${route.date}T${route.Time}Z </lastmod>
    </url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList.map((url) => toUrl(url)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {
    const siteMapJson = await fetch(`https://blogx.pythonanywhere.com/hashtagall/`);
    const urlList = await siteMapJson.json();
    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } } }
};
export default Sitemap;