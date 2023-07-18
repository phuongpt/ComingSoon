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
      alert.success("We will notify you shortly.");
      await fetch('/api/notifyMe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
    } else {
      alert.error("Please input a valid email.")
    }
  };

  return <Layout title="NineLanguage - Coming Soon">
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

    <div className="absolute bottom-5">
      <ul className="flex space-x-3">
        <li>
          <Link href="mailto:support@ninelanguage.com">
            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 64 64"
                aria-hidden="true"
              >
                <path id="Mail" d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
	h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
	L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
	L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
	C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
	 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
	c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
	l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/>
              </svg>
            </a>
          </Link>
        </li>

      </ul>
    </div>
  </Layout>
};

export default IndexPage;
