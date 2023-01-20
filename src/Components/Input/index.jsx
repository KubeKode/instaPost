import styled from "styled-components";
const Input = ({ handleChange}) => {
  return (
    <Wrapper>
      <input onChange={handleChange} placeholder="Add your text here" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  & input {
    height: 10vh;
    width: 80%;
    border: none;
    border-bottom: 1px solid gray;
    padding: 10px;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
  }
  & input:focus {
    border-bottom: 1px solid blue;
  }
`;
export default Input;
