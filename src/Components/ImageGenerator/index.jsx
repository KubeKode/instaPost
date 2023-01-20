import { toPng } from "html-to-image";
import { useCallback, useRef } from "react";
import styled from "styled-components";
const Generator = (props) => {
  const ref = useRef(null);
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <>
      <RefComponent ref={ref}>{props.children}</RefComponent>
      <Button onClick={onButtonClick}>Download</Button>
    </>
  );
};

const RefComponent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #0b549b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  margin: 15px;
  transition: all 0.3s ease-in-out;
`;

export default Generator;
