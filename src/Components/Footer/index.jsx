import styled from "styled-components";

const Footer = () => {
  return <Wrapper>copyright @ Tushar Rajpoot</Wrapper>;
};
const Wrapper = styled.div`
  font-size: 16px;
  background-color: #0b549b;
  color: white;
  padding: 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;
export default Footer;
