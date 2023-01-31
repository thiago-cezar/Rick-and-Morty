import styled from "styled-components";

export const Li = styled.li `
text-align: center;
background-image: linear-gradient(to right, rgba(000,000,000,0.5), ${(props)=>(props.color)});
border-radius: 8px;
width: 12rem;
height: 15rem;

h3{
    border-radius: 8px  8px 0 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    -webkit-text-stroke-width: 0.2px;
    padding: 0.2rem 0;
}
img{
    border-radius:10%;
    width: 90%;
}

span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    font-size: 20px;
    padding: 3px 10px;
    font-weight: 600;
    border-radius:0 0 8px  8px;

}
`