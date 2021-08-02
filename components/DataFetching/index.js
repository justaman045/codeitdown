
import domainName from '../../FakeData/index.json'

let fakeLinks;
let serverDomain;
if (domainName.isInDevelopement) {
    serverDomain = 'http://127.0.0.1:8000'
} else {
    serverDomain = 'https://blogx.pythonanywhere.com'
}

export default fakeLinks = {
    "cateogary": `${serverDomain}/cat/`,
    "recentPost": `${serverDomain}/trending/`,
    "editorsPick": `${serverDomain}/editorsPick/`,
    "recomendedTopics": `${serverDomain}/cateoo/`,
    "popularPosts": `${serverDomain}/popular/`,
    "randomCateogary": `${serverDomain}/random/`,
    "recentBlogPosts": `${serverDomain}/recent/`,
    "newsletter": `${serverDomain}/newsletter/`,
    "searchByPost": `${serverDomain}/posts/`,
    "allBlogPost": `${serverDomain}/all/`,
    "likeThePost": `${serverDomain}/likes/`,
    "previousPost": `${serverDomain}/prevPost/`,
    "nextPost": `${serverDomain}/nextPost/`,
    "famousCateogaries": `${serverDomain}/cat/`,
    "getComments": `${serverDomain}/getComments/`,
    "commentaPost": `${serverDomain}/comments/`,
    "contact": `${serverDomain}/contact/`,
    "allHashtag": `${serverDomain}/hashtagall/`,
    "catsearch": `${serverDomain}/catsearch/`,
    "hashsearch": `${serverDomain}/hashtagsearch/`,
    "headsearch": `${serverDomain}/headlinesearch/`,
}