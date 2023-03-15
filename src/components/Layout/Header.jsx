import Link from "next/link";
export default function Header() {
  return (
    <header className="row fs-1">
      <Link href={'/'} className="cursor-pointer col-12 col-md-6 bg-primary text-white fw-bold p-3 rounded-3 d-flex align-items-center justify-content-center">
        Home
      </Link>
      <div className="col-12 col-md-6 text-center text-md-left">
        <div className="row">
          <Link href={'/works'} className="col-12 col-md-6 cursor-pointer text-center text-md-left bg-light text-dark fw-bold p-3 rounded-3">
            Works
          </Link>
          <Link href={'/notes'} className="col-12 col-md-6 cursor-pointer text-center text-md-left bg-secondary text-white fw-bold p-3 rounded-3">
            Notes
          </Link>
        </div>
        <Link href={'/contact'} className="row">
          <div className="col-12 cursor-pointer text-center text-md-left bg-warning text-white fw-bold p-3 rounded-3">
            Contact Me
          </div>
        </Link>
      </div>
    </header>
  );
}
