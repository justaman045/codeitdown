// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
    res.status(200).json({ postReq: process.env.blogURLPOST })
}

export default handler