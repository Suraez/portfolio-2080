"use client";
import { Github, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

export default function Example() {

  return (
    <div className="relative pb-16 mt-12">
      <div className="pt-16 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex items-center justify-center">
          <div>
          <h2 className="text-4xl">This page is under the construction  🚧</h2>
          <div className="flex justify-center">
          <h3 className="text-2xl">Stay Tuned!</h3>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
