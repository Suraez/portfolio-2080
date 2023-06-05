"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NepaliNews = () => {
  const [showBlockQuote, setShowBlockQuote] = useState(false);

  useEffect(() => {
    setShowBlockQuote(true);
  }, []);
  return (
    <div className="container m-36">
      <h3 className="text-white text-4xl mb-10">Nepali News Headline Generator</h3>
      <hr className="bg-white w-1/2" />
      {/* 1st row */}
      <div className="flex mt-10">
        <div className="description w-1/2 flex items-center p-5">
          <p className="text-2xl">
            A NLP text generation model in Nepali language. For the dataset, I scraped the
            100 headlines from the official Ekantipur website and then built a word
            dictionary by tokeinzing them. Each headline is converted into sequence and
            last item in the sequence is the output whereas items before that are input.
            This is how model is trained. So, when user input some words (seeds), the
            model finds the nearest word in the dictionary. Limitation: It can only
            generate the learned words. Since, the dataset is extremely small, the metrics
            are:
          </p>
          <ul>
            <li>Accuracy: 1.0000</li>
            <li>Val Accuracy: 0.0000e+00</li>
            <li>Loss: 0.4187</li>
            <li>Val Loss: 8.6558</li>
          </ul>
          Future Work: Increase the text corpus by 10x, Redefine the Model Architecture.
        </div>
        {showBlockQuote && (
          <>
            <blockquote className="imgur-embed-pub" lang="en" data-id="6JBK6ZF">
              <Link href="//imgur.com/6JBK6ZF">Neapli News Headline Generator</Link>
            </blockquote>
            <script async src="//s.imgur.com/min/embed.js"></script>
          </>
        )}
      </div>

      <div className="container mt-10">
        <h5>
          Demo URL{" "}
          <Link href="https://nepali-generator.streamlit.app/">
            https://nepali-generator.streamlit.app/
          </Link>
        </h5>
        <h4>
          Repo URL:{" "}
          <Link href="https://github.com/Suraez/nepali-text-generator">
            https://github.com/Suraez/nepali-text-generator
          </Link>{" "}
        </h4>
      </div>

      {/* 2nd row */}
      <div className="flex mt-10">
        <div className="flex-col loss p-5 space-y-4">
          <h3>Loss & Accuracy Plot: </h3>
          <hr className="bg-white" />
          <Image
            src="https://i.imgur.com/mjxcN9d.png"
            height={400}
            width={400}
            alt="loss plot"
          />
        </div>
      </div>
    </div>
  );
};

export default NepaliNews;
