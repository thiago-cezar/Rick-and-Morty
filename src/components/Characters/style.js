import styled from "styled-components";

import Back from "../../img/background.png";

export const Main = styled.main`
  @keyframes loading {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  background-image: url(${Back});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  justify-content: center;
  height: 100vh;
  background-attachment: fixed;

  .soon {
    display: flex;
    width: 100%;
  }
  .img {
    margin: 0 auto;
    width: 40%;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    width: 95%;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
      background-color: rgb(192, 223, 64, 01);
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(0, 0, 0);
    }
    animation: loading 2s;
  }

  @media screen and (max-width: 500px) {
    .img {
      width: 70%;
    }
  }
`;
