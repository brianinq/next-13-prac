import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href={"/"}>App</Link>
        </div>
        <div className="links">
          <Link href={"/about"}>About</Link>
          <Link href={"/about/team"}>Our team</Link>
          <Link href={"/code/repos"}>Code</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
