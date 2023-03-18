import { useState, useEffect } from "react";
import Head from "next/head";
import axios, { AxiosResponse } from "axios";
import dayjs from 'dayjs'
import Loading from '@/components/icons/Loading'
import Layout from "../layout";
export default function Works() {
  const [works, setWorks] = useState<AxiosResponse | null | void>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProjects = () => {
    setIsLoading(true);
    axios
      .get("https://api.github.com/users/furkankarakuzu/repos")
      .then((response) => {
        response.data.sort((a:any,b:any) =>  b.stargazers_count - a.stargazers_count);
        setWorks(response);
        if(response) setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>Furkan Karakuzu | Works</title>
        <meta name="description" content="Furkan Karakuzu's works." />
      </Head>
      <Layout>
      <div className="row">
      <h2 className="mb-4 fw-bold">Works</h2>
      {isLoading && <Loading/>}
        {!isLoading && works &&
          works.data.map((item: any) => {
            return (
              <div key={item.id} className="col-12 col-sm-4 my-2 d-flex flex-column">
                <div className=" border border-1 rounded-3 d-flex align-items-stretch h-100">
                  <div className="card bg-transparent d-flex flex-column w-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">
                      {item.description}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                    <span className="text-muted fs-6">
                    {dayjs(item.created_at).format('DD-MM-YYYY')}
                    </span>
                    <a href={item.html_url} className="card-link" target="_blank">
                      Details
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      </Layout>
    </>
  );
}
