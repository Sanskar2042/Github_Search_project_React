import React from "react";
import { GithubContext, useGlobalContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { githubUser } = useGlobalContext();

  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "john_doe"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || "earth"}
        </p>
        <a href={`https://${blog}`}>
          <MdLink /> {blog}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: white;
  padding: 1.5rem 2rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  position: relative;
  &::before {
    content: "user";
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
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: hsl(210, 22%, 49%);
      border: 1px solid hsl(210, 22%, 49%);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: hsl(210, 22%, 49%);
        color: white;
      }
    }
  }
  .bio {
    color: hsl(209, 34%, 30%);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: hsl(210, 22%, 49%);
      transition: all 0.3s linear;
      svg {
        color: hsl(210, 22%, 49%);
      }
      &:hover {
        color: hsl(209, 34%, 30%);
      }
    }
  }
`;
export default Card;
