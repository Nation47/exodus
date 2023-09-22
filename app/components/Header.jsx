import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="nav">
                    <div>
                        <Link href='/'>Hannan's TechBlog</Link>
                    </div>
                    <div className="nav-list">
                        <Link href='/'>home</Link>
                        <Link href='/contact'>contact</Link>
                        <Link href='/about'>about</Link>
                        <Link href='/blog'>blog</Link>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;