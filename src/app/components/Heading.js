import Image from "next/image";
import Link from "next/link";
import React from "react";
import questionMark from "../assets/questionMark.gif";

const Heading = ({ heading, showQuestionMark = true }) => {
  return (
    <>
      <div
        className={
          "border-b border-b-black pt-4 pb-1 text-lg font-bold text-purple"
        }>
        {heading}
        {showQuestionMark && (
          <Link href="/" className="inline-block active:bg-yellow-light">
            <Image
              src={questionMark}
              className="ml-2.5"
              alt="question mark"
              width={20}
              height={20}
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Heading;
