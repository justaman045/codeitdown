import BannerModule from "../components/Banner/Banner";
import CateogaryBlock from "../components/Cateogary Block/CateogaryBlock";
import EditorsPick from "../components/Editors Pick/EditorsPick";
import SeoOptimised from "../components/Seo";
import PopularPost from "../components/Popular Posts/PopularPosts";
import CateogaryBlockModule from "../components/Cateogary Wise Module/CateogaryBlock";
import Newsletter from "../components/NewsLetter/Newzletter";
import Development from "../components/Development";

export default function Home({ cateogaries, recentPosts, editorsPick, recomendedTopics, popularPosts, randomCateogary, recentBlogs }) {
  if (cateogaries.length == 0){
    return (<Development />);
  } else {
    return (
      <>
        <SeoOptimised curPage={'Home'} />
        <CateogaryBlock cateogarys={cateogaries} />
        <BannerModule recentPost={recentPosts} />
        <EditorsPick editorsPick={editorsPick} recomendedTopics={recomendedTopics} />
        <PopularPost popularPosts={popularPosts} />
        <CateogaryBlockModule randomCateogary={recentBlogs} head={'Recent Blog Posts'} typeOfSection={'/blogs'} />
        <Newsletter />
      </>
    )
  }
}

export const getStaticProps = async () => {
  let todayDate = new Date();
  if ((parseInt(todayDate.getMonth()) <= 9) && (parseInt(todayDate.getFullYear()) <= 2022)){
    const [cateogariesRes, recentPostsRes, editorsPickRes, recomendedTopicsRes, popularPostRes, recentBlogsRes] = await Promise.all([
      fetch(`${process.env.blogURLPOST}${process.env.cateogary}`),
      fetch(`${process.env.blogURLPOST}${process.env.recentPost}`),
      fetch(`${process.env.blogURLPOST}${process.env.editorsPick}`),
      fetch(`${process.env.blogURLPOST}${process.env.recomendedTopics}`),
      fetch(`${process.env.blogURLPOST}${process.env.popularPosts}`),
      fetch(`${process.env.blogURLPOST}${process.env.recentBlogPosts}`),
    ])

    const [cateogaries, recentPosts, editorsPick, recomendedTopics, popularPosts, recentBlogs] = await Promise.all([
      cateogariesRes.json(),
      recentPostsRes.json(),
      editorsPickRes.json(),
      recomendedTopicsRes.json(),
      popularPostRes.json(),
      recentBlogsRes.json(),
    ])

    return {
      props: {
        cateogaries,
        recentPosts,
        editorsPick,
        recomendedTopics,
        popularPosts,
        recentBlogs,
      },
      revalidate: 60
    }
  } else {

    let cateogaries = []
    let recentPosts = []
    let editorsPick = []
    let recomendedTopics = []
    let popularPosts = []
    let recentBlogs = []
    return {
      props: {
        cateogaries,
        recentPosts,
        editorsPick,
        recomendedTopics,
        popularPosts,
        recentBlogs,
      },
      revalidate: 60
    }
  }
}