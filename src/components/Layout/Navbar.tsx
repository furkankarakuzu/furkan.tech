import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { isActiveLink } from "@/lib/utils";
const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Notes",
    href: "/notes",
  },
  {
    name: "Contact Me",
    href: "/contact",
  },
];
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="mb-5 border-bottom border-top py-4">
      <nav className="d-flex justify-content-center">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <span className="me-3 d-flex flex-column position-relative">
              {name}
              {isActiveLink(href, router.pathname) && (
                <motion.div
                  layoutId="navigation-underline"
                  className="navigation-underline bg-warning"
                  animate
                />
              )}
            </span>
          </Link>
        ))}
      </nav>
    </nav>
  );
}
