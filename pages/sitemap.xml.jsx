import data from '../FakeData/index.json';
const Sitemap = () => { };
const domainName = data.currentDomain;
const toUrl = (route) =>
    `<url><loc>${domainName}/posts/${route.slug}</loc></url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList.map((url) => toUrl(url)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {
    const siteMapJson = await fetch(`https://blogx.pythonanywhere.com/all/`);
    const urlList = await siteMapJson.json();
    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } } }
};
export default Sitemap;