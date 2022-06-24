
import domainName from '../../FakeData/index.json'

let fakeLinks;
let serverDomain;
if (domainName.isInDevelopement) {
    serverDomain = 'http://127.0.0.1:8000'
} else {
    serverDomain = 'https://blogx.pythonanywhere.com'
}

export default fakeLinks = {
    // Pages Interacting with Backend
    // "cateogary": `${serverDomain}/cat/`,
    // "recentPost": `${serverDomain}/trending/`,
    // "editorsPick": `${serverDomain}/editorsPick/`,
    // "recomendedTopics": `${serverDomain}/cateoo/`,
    // "popularPosts": `${serverDomain}/popular/`,
    // "randomCateogary": `${serverDomain}/random/`,
    "recentBlogPosts": `${serverDomain}/recent/`,
    // "allBlogPost": `${serverDomain}/all/`,
    // "allCategories": `${serverDomain}/allCateogary/`,
    // "allHashtag": `${serverDomain}/hashtagall/`,
    // "searchByPost": `${serverDomain}/posts/`,
    // "getComments": `${serverDomain}/getComments/`,
    // "hashsearch": `${serverDomain}/hashtagsearch/`,
    // "catsearch": `${serverDomain}/catsearch/`,
    // The Components Interacting with Backend
    "headsearch": `${serverDomain}/headlinesearch/`,
    "newsletter": `${serverDomain}/newsletter/`,
    "likeThePost": `${serverDomain}/likes/`,
    "previousPost": `${serverDomain}/prevPost/`,
    "nextPost": `${serverDomain}/nextPost/`,
    "contact": `${serverDomain}/contact/`,
    "commentaPost": `${serverDomain}/comments/`,
    "famousCateogaries": `${serverDomain}/cat/`,
}