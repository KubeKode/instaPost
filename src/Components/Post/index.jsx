import styled from "styled-components";
import { BiSearchAlt2, BiMicrophone } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Post = ({displayText}) => {
  return (
    <Wrapper id="my-image">
      <Bar>
        <TextSection className="text-section">
          <BiSearchAlt2 />
          {displayText}
        </TextSection>
        <Icons className="icons">
          <AiOutlineClose /> | <BiMicrophone />
        </Icons>
      </Bar>
    </Wrapper>
  );
};
const Icons = styled.span``;
const Bar = styled.div`
  background-color: white;
  font-weight: bolder;
  width: 95%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 2em;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  & .text-section {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    line-height: 60px;
  }
  & .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;
const TextSection = styled.div``;
const Wrapper = styled.div`
  width: 500px;
  background-color: #01204c;
  height: 500px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default Post;