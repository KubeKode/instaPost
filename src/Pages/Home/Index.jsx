import Header from "../../Components/Header";
import styled from "styled-components";
import Post from "../../Components/Post/Index";
import Generator from "../../Components/ImageGenerator/Index";
const HomePage = ()=>{
    return(
        <Wrapper>
            <Header/>
            <Post />
            <Generator />
        </Wrapper>
        
    )
}
const Wrapper = styled.div``;
export default HomePage