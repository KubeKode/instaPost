import Header from "../../Components/Header";
import styled from "styled-components";
import Post from "../../Components/Post";
import Generator from "../../Components/ImageGenerator";
const HomePage = ()=>{
    return(
        <Wrapper>
            <Header/>
            <Post />
            <Generator />
        </Wrapper>
        
    )
}
const Wrapper = styled.div` 

`;
export default HomePage