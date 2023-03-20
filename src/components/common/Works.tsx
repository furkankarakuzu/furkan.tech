import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Loading from "@/components/icons/Loading";
import { GithubRepo } from "@/components/icons/GithubRepo";
import { GithubStar } from "@/components/icons/GithubStar";
import githubColors from '../../lib/githubColors.json'
export default function WorksComponent() {
  const [works, setWorks] = useState<AxiosResponse | null | void>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProjects = () => {
    setIsLoading(true);
    axios
      .get("https://api.github.com/users/furkankarakuzu/repos")
      .then((response) => {
        response.data.sort(
          (a: any, b: any) => b.stargazers_count - a.stargazers_count
        );
        setWorks(response);
        if (response) setIsLoading(false);
      });
  };
  function setLanguageColor(language = null) {
    let color;
    [githubColors].forEach((element: any) => {
      for (const key in element) {
        if (key===language) color = element[key].color
      }
    });
    return color || 'transparent'
  }
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <section className="row">
      <h2 className="mb-4 fw-bold">Works</h2>
      {isLoading && <Loading />}
      {!isLoading &&
        works &&
        works.data.map((item: any) => {
          return (
            <div
              key={item.id}
              className="col-12 col-sm-4 my-2 d-flex flex-column"
            >
              <div className="d-flex flex-column rounded-1 border border-1 p-3 d-flex align-items-stretch h-100">
                <div className="d-flex align-items-center gap-2">
                  <GithubRepo/>
                  <a
                    target="_blank"
                    className="fs-6 fw-bold"
                    href={item.html_url}
                  >
                    {item.name}
                  </a>
                </div>
                <div className="mt-2 text-secondary h-100">
                  <p>
                  {item.description}
                  </p>
                </div>
                <div className="mt-2 d-flex align-items-center gap-4 text-secondary">
                  <div className="d-flex align-items-center gap-1">
                    <div
                      className="rounded-circle"
                      style={{backgroundColor:setLanguageColor(item.language), width:'0.75rem', height:'0.75rem'}}
                    ></div>
                    <span>{item.language}</span>
                  </div>
                  <a
                    className="d-flex align-items-center gap-1 text-secondary"
                    target={'_blank'}
                    href={item.stargazers_url.split('api.').join('').split('/repos').join('')}
                  >
                    <GithubStar/>
                    <span>{item.stargazers_count}</span>
                  </a>
                  <span>{item.fork && '(Forked Repository)'}</span>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
