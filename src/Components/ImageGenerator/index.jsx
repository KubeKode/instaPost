import htmlToImage from "node-html-to-image";
// import download from "downloadjs";
import styled from "styled-components";
const Generator = () => {
  const handlePng = () => {
    // htmlToImage
    //   .toPng(document.getElementById("my-img"))
    //   .then(function (dataUrl) {
    //     download(dataUrl, "text-img.png");
    //   });
    // htmlToImage({
    //     output: "image.png",
    //     html: document.getElementById("my-img")
    // }).then(console.log("Done"))
  };
  return <Button>Download</Button>;
};

const Button = styled.button``;

export default Generator;