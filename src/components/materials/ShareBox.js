import React from "react";
import {
  EmailShareButton,
  WhatsappShareButton,
  EmailIcon,
  WhatsappIcon,
} from "react-share";

function ShareBox({ openShares, linkToRoute, articleTitle, colorScheme }) {
  return (
    <div>
      {openShares ? (
        <div className="flex max-w-sm w-auto shadow-md rounded-lg overflow-hidden mx-auto mb-4">
          <div className="w-2 bg-gray-800"></div>
          <div className="flex justify-center items-center">
            <div className="flex p-3 bg-gray-200 rounded-lg justify-center items-center max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex">
              <div>
                {/* <img
                  className="w-10 h-10 ml-2 mb-2 md: object-cover rounded-full"
                  alt="User avatar"
                  src={require("../../assets/fractal1.svg")}
                /> */}

                <div className="mx-3">
                  <p
                    className={
                      colorScheme === "dark" ? "text-gray-100" : "text-gray-600"
                    }
                  >
                    Show your friends what{" "}
                    <span className="text-gray-800">you found here —></span>.
                  </p>
                </div>
              </div>
              <div className="pr-5 pt-2">
                <WhatsappShareButton
                  url={" "}
                  title={`Found on Morningfeed: ${articleTitle} Read on at ${linkToRoute}.\nFor more such articles, check out https://morningfeed.netlify.app`}
                >
                  <WhatsappIcon size={30} />
                </WhatsappShareButton>
              </div>
              <div className="pr-5 pt-2">
                <EmailShareButton
                  url={" "}
                  subject={`Found a pretty cool article on Morningfeed!`}
                  body={`${articleTitle} Read on at ${linkToRoute}.\nFor more such articles, check out https://morningfeed.netlify.app`}
                >
                  <EmailIcon size={30} />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ShareBox;
