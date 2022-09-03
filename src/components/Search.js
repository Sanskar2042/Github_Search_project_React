import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
const Search = () => {
  const { request, error, searchGithubUser, loading } =
    React.useContext(GithubContext);

  const [user, setUser] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {request > 0 && !loading && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>requests : {request}/60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: white;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: #f1f5f8;
      letter-spacing: 0.1rem;
      color: hsl(209, 34%, 30%);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: hsl(209, 34%, 30%);
      text-transform: capitalize;
      letter-spacing: 0.1rem;
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      background: hsl(185, 62%, 45%);
      color: white;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: hsl(210, 31%, 80%);
        color: hsl(185, 91%, 17%);
      }
    }

    svg {
      color: hsl(210, 22%, 49%);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: hsl(210, 22%, 49%);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: 0.1rem;
  }
`;
export default Search;
