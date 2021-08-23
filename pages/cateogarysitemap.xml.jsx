import data from '../FakeData/index.json';
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
        <loc>${domainName}/posts/${route.slug}</loc>
        <changefreq> daily </changefreq>
        <priority> 1 </priority>
        <lastmod> ${route.date}T${route.Time}Z </lastmod>
    </url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${routeName.map((routeNameObj) => toUrlBase(routeNameObj)).join("")}
    ${urlList.map((url) => toUrl(url)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {
    const siteMapJson = await fetch(`https://blogx.pythonanywhere.com/allCateogary/`);
    const urlList = await siteMapJson.json();
    const sitemap = createSitemap(urlList);
    console.log(sitemap)
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } } }
};
export default Sitemap;