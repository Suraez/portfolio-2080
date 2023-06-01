import React from "react";
import Image from "next/image";

const ImageClass = () => {
  return (
    <div className="container m-36">
      <h3 className="text-white text-4xl mb-10">LI Developer Image Classification</h3>
      <hr className="bg-white w-1/2" />
      {/* 1st row */}
      <div className="flex mt-10">
        <div className="description w-1/2 flex items-center p-5">
          <p className="text-2xl">
            The DL model is deployed on web service called Streamlit Community Cloud which
            builds the CI/CD pipeline out of the box. The model architecture consists of
            one input layer, six hidden layers and one output layer. Each 2D convolution
            layer is followed by max pooling layer in the hidden layers. Despite the small
            datasets, the model achieved the followings:
            <ul>
              <li>Accuracy: 0.5741</li>
              <li>Val Accuracy: 0.5455</li>
              <li>Loss: 1.0381</li>
              <li>Val Loss: 1.0204</li>
            </ul>
            Future Work: Data Augmentation to increase dataset, Fine tuning by testin with
            different epochs
          </p>
        </div>
        <div className="image w-1/2">
          {/* <Image
            src="https://i.imgur.com/PCLscZD.png"
            alt="image"
            width={500}
            height={500}
          /> */}
          <blockquote className="imgur-embed-pub" lang="en" data-id="a/3xEGNIs">
            <a href="//imgur.com/a/3xEGNIs">lis image classification demo</a>
          </blockquote>
          <script async src="//s.imgur.com/min/embed.js"></script>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex mt-10">
        <div className="flex-col loss w-1/2 p-5 space-y-4">
          <h3>Accuracy Plot: </h3>
          <hr className="bg-white w-1/2" />
          <Image
            src="https://i.imgur.com/mdbfmLS.png"
            height={400}
            width={400}
            alt="loss plot"
          />
        </div>
        <div className="flex-col loss w-1/2 p-5 space-y-4">
          <h3>Loss Plot: </h3>
          <hr className="bg-white w-1/2" />
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
