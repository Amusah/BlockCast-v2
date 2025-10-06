import React from "react";

type ThumbnailProps = {
  url: string;
};

// get and render links in claim text
const renderClaimWithLinks = (text: string) => {
  // const urlRegex = /^(https?:\/\/[^\s;.,!]+)/;
  // const urlRegex = /^(https?:\/\/[^\s]+)/g;

  // const parts = text.split(/;|,|%|#|-/);
  const urlRegex = /https?:\/\/[^\s'"<>]+/g;

  const urls = text.match(urlRegex);
  const stringed = urls?.toString();

  // -_.,?%&*=+-*!#

  // const links = parts
  //   .map((part) => part.trim())
  //   .filter((part) => urlRegex.test(part));

  // const parts = text.split(urlRegex);
  // Array.from(urls);
  // console.log(urls.split(';'))
  console.log(urls);
  console.log(stringed?.split(/;|,/));
};
renderClaimWithLinks(
  "https://example.com;https://test.org https://hello.com &&* http://world.net"
);

const Thumbnail: React.FC<ThumbnailProps> = ({ url }) => {
  if(!url) return;

  const urlRegex = /https?:\/\/[^\s'"<>]+/g;
  const urls = url?.match(urlRegex);
  const urlList = urls?.toString().split(/;|,/);

  console.log("Thumbnail URLs:", urlList);

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-full mt-4">
      {urlList?.map((link, index) => (
        <iframe className="w-full" key={index} src={link}></iframe>
      ))}
    </div>
  );
};

export default Thumbnail;
