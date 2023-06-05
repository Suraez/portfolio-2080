import Image from "next/image";
import Link from "next/link";
import React from "react";

const NepaliNews = () => {
  return (
    <div className="container-fluid mt-24 p-4 md:p-24">
      <div className="head">
        <h3 className="text-white mb-4 md:text-4xl">
          Automatic Speech Recognition System (ASR)
        </h3>
        <hr className="bg-white mb-4" />
      </div>
      <div className="body">
        <div className="description">
          <p className="mt-4 text-sm md:text-xl lg:text-2xl">
            A DL model which accepts recorded audio as input and output the words spoken
            in the audio along with the metrics such as Word Error Rate (WER) and
            Character Error Rate (CER). We used transfer learning on the pre-trained model
            provided by the Google - Transformers on the open source LibriSpeech Audio
            Dataset which has approximately of 1000 hours and is sampled at the rate of
            16KHz.
          </p>
          <div className="mt-4">
            <Link
              href="https://bookbytes.onrender.com/"
              className="hover:cursor-pointer"
              target="blank"
            >
              <h5 className="text-sm md:text-xl lg:text-2xl">
                Demo URL: https://asr.streamlit.app/
              </h5>
            </Link>
            <Link
              href="https://github.com/Suraez/major-project"
              className="hover:cursor-pointer"
              target="blank"
            >
              <h4 className="text-sm md:text-xl lg:text-2xl">
                Repo URL: https://github.com/Suraez/major-project
              </h4>
            </Link>{" "}
          </div>
        </div>

        <div className="architecture md:mt-32">
          <h3 className="text-white mb-4 mt-20 md:text-2xl">Outputs</h3>
          <hr className="bg-white mb-4" />
          <div className="output-section flex flex-col md:flex-row md:justify-around space-y-4">
            <div className="first-col mt-4">
              <Image src="/projects/speech.jpg" width="600" height="500" alt="speeech" />
            </div>
            <div className="second-col space-y-4">
              <div className="card">
                <h2 className="text-sm md:text-xl">Testing: </h2>
                <Image
                  src="/projects/output1.png"
                  width="600"
                  height="500"
                  alt="output1"
                />
              </div>
              <div className="card">
                <h2 className="text-sm md:text-xl">Amplitude vs. Time: </h2>
                <Image
                  src="/projects/output2.png"
                  width="600"
                  height="500"
                  alt="output2"
                />
              </div>
              <div className="card">
                <h2 className="text-sm md:text-xl">Spectogram: </h2>
                <Image
                  src="/projects/output3.png"
                  width="600"
                  height="500"
                  alt="output3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepaliNews;
