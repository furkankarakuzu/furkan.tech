import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="row mt-5 mb-2">
      <hr className="text-white" />
      <h5 className="text-muted text-center">
        You can access the source codes of this website on{" "}
        <a href="https://github.com/furkankarakuzu/furkan.tech" target="_blank">
          github{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            width="14"
            height={14}
          />
        </a>
      </h5>
    </footer>
  );
}
