import data from '../FakeData/index.json';
const openSearch = () => { };
const domainName = data.currentDomain;

const createSitemap = () =>
    `<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
<ShortName>${data.name} Search</ShortName>
<Description>Find posts from ${data.name}.</Description>
<Contact>${data.emailAddress}</Contact>
<Url type="text/html" template="${domainName}/{searchTerms}"/>
</OpenSearchDescription>`;

export async function getServerSideProps({ res, req }) {
    const sitemap = createSitemap();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: {  } } }
};
export default openSearch;