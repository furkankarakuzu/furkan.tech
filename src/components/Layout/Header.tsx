import Image from "next/image";
import { Github, Linkedin, Hackerrank, Twitter, Stackoverflow } from "../icons";
import ThemeSwitch from "../helpers/ThemeSwitch";

export default function Header() {
  return (
      <header className="d-flex align-items-start justify-content-between mt-5 mb-3">
        <div className="d-flex align-items-center gap-3 ">
          <Image
            alt="Furkan Karakuzu Profile Picture"
            src="/furkan-karakuzu.jpg"
            width={100}
            height={100}
            className="rounded-circle"
            priority
          />
          <div className="d-flex flex-column">
            <h1 className="fs-2 fw-normal">Furkan Karakuzu</h1>
            <a className="text-muted" href="mailto:furkannkarakuzu@hotmail.com" target="_blank">
              furkannkarakuzu@hotmail.com
            </a>
            <div className="d-flex gap-2 ">
              <a className="text-muted" aria-label="Twitter profile link" href="https://twitter.com/furkannkarakuzu" target="_blank">
                <Twitter />
              </a>
              <a className="text-muted" aria-label="Github profile link" href="https://github.com/furkankarakuzu" target="_blank">
                <Github />
              </a>
              <a className="text-muted" aria-label="Linkedin profile link" href="https://linkedin.com/in/furkankarakuzu" target="_blank">
                <Linkedin />
              </a>
              <a className="text-muted" aria-label="Hackerrank profile link" href="https://www.hackerrank.com/furkankarakuzu" target="_blank">
                <Hackerrank/>
              </a>
              <a className="text-muted" aria-label="Stackoverflow profile link" href="https://stackoverflow.com/users/14901143" target="_blank">
                <Stackoverflow />
              </a>
            </div>
          </div>
        </div>
        <ThemeSwitch />
      </header>
  );
}
