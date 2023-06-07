"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ImageClass = () => {
  const [showBlockQuote, setShowBlockQuote] = useState(false);

  useEffect(() => {
    setShowBlockQuote(true);
  }, []);
  return (
    <div className="relative mt-36">
      <div className="px-4 flex flex-col space-y-2">
        <h3 className="text-white text-md md:text-4xl">
          LIS Developer Image Classification
        </h3>
        <hr className="bg-white md:w-3/4" />
      </div>
      <div className="md:flex md:m-32 md:mt-12 mt-4">
        <div className="flex flex-col justify-center px-5">
          <p className="text-sm md:text-xl">
            The DL model is deployed on web service called Streamlit Community Cloud which
            builds the CI/CD pipeline out of the box. The model architecture consists of
            one input layer, six hidden layers and one output layer. Each 2D convolution
            layer is followed by max pooling layer in the hidden layers. Despite the small
            datasets, the model achieved the followings:
          </p>
          <ul className="text-white text-sm md:text-xl">
            <li>Accuracy: 0.5741</li>
            <li>Val Accuracy: 0.5455</li>
            <li>Loss: 1.0381</li>
            <li>Val Loss: 1.0204</li>
          </ul>
          <p className="text-sm md:text-xl">
            Future Work: Data Augmentation to increase dataset, Fine tuning by testin with
            different epochs
          </p>
        </div>
        {showBlockQuote && (
          <div className="flex justify-center">
            <blockquote className="imgur-embed-pub" lang="en" data-id="a/3xEGNIs">
              <Link href="//imgur.com/a/3xEGNIs">lis image classification demo</Link>
            </blockquote>
            <script async src="//s.imgur.com/min/embed.js"></script>
          </div>
        )}
      </div>

      {/* 2nd row */}
      <div className="md:flex md:m-32 md:mt-12">
        <div className="flex flex-col p-5 space-y-4">
          <h3>Accuracy Plot: </h3>
          <hr className="bg-white" />
          <Image
            src="https://i.imgur.com/mdbfmLS.png"
            height={400}
            width={400}
            alt="loss plot"
          />
        </div>
        <div className="flex flex-col loss p-5 space-y-4">
          <h3>Loss Plot: </h3>
          <hr className="bg-white" />
          <Image
            src="https://i.imgur.com/PCLscZD.png"
            height={400}
            width={400}
            alt="loss plot"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageClass;
