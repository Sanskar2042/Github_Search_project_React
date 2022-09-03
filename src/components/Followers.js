import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers } = useGlobalContext();

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: white;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: white;
    color: var(--clr-grey-5);
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: all 0.3s linear;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: hsl(210, 22%, 49%);
    }
  }
`;
export default Followers;
