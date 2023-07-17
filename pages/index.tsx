import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import * as EmailValidator from 'email-validator';
import { useAlert } from 'react-alert'

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const alert = useAlert()

  const saveEmail = async (e) => {
    e.preventDefault();
    if (EmailValidator.validate(email)) {
      await fetch('/api/notifyMe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
      alert.success("We will notify you shortly.");
    } else {
      alert.error("Please input a valid email.")
    }
  };

  return <Layout title="Coming Soon - Clean Coming Soon Page (Tailwind CSS, NextJs & HTML5) created by themeptation.net">
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h1 className="text-7xl lg:text-9xl font-extrabold">We are blowing up</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          We are creating something amazing and unique.
        </p>
      </div>
      <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Your email"
          className="w-full text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
        />
        <button onClick={saveEmail} className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
          Notify me
        </button>
      </form>
    </div>

  </Layout>
};

export default IndexPage;
