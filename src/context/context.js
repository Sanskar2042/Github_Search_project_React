import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";
export const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  //request,loading
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);

  //error
  const [error, setError] = useState({ show: false, msg: "" });

  //search user
  const searchGithubUser = async (user) => {
    setLoading(true);
    try {
      const response = await fetch(`${rootUrl}/users/${user}`);
      const data = await response.json();
      if (data.message) {
        toggleError(true, "there is no user with that username");
      } else {
        setGithubUser(data);
        const { followers_url, repos_url } = data;

        await Promise.allSettled([
          axios(`${repos_url}`),
          axios(`${followers_url}?per_page=100`),
        ])
          .then((response) => {
            const [repos, followers] = response;
            const status = "fulfilled";
            if (repos.status === status) {
              setRepos(repos.value.data);
            }
            if (followers.status === status) {
              setFollowers(followers.value.data);
            }
          })
          .catch((err) => console.log(err));

        toggleError();
      }
      checkRequests();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then((response) => {
        const { data } = response;
        let {
          rate: { remaining },
        } = data;
        setRequest(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  useEffect(() => checkRequests(), []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        request,
        error,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};
