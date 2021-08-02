import Link from 'next/link'

export default function UsefullLink() {
    return (
        <>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/blogs'><a>Blogs</a></Link></li>
            <li><Link href='/aboutMe'><a>About Me</a></Link></li>
            <li><Link href='/contact'><a>Contact</a></Link></li>
        </>
    )
}