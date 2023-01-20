import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Generator from "./Components/ImageGenerator";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import { useState } from "react";
function App() {
  const [displayText, setDisplayText] = useState("");
  const handleChange = (event) => {
    setDisplayText(event.target.value);
  };
  return (
    <div className="App">
      <Header />
      <EditorDisplay>
        <InputSide>
          <Input handleChange={handleChange} />
        </InputSide>
        <OutputSide>
          <Generator>
            <Post displayText={displayText} />
          </Generator>
        </OutputSide>
      </EditorDisplay>
      <Footer />
    </div>
  );
}
const InputSide = styled.div`
  width: 50%;
`;
const OutputSide = styled.div`
  width: 50%;
`;
const EditorDisplay = styled.section`
  display: flex;
  width: 100%;
  column-gap: inherit;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
export default App;
