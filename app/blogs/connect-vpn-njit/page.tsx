import Head from 'next/head';
import Image from 'next/image';
import Cisco from "../../../public/blogs/njit-vpn/blog-njit.png";

export default function StepByStepGuide() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <Head>
        <title>Step-by-Step Guide to Install NJIT Anyconnect CISCO Secure Client on Linux Distro like Ubuntu, Fedora etc.</title>
        <meta name="description" content="Learn how to install and configure the Cisco Secure Client VPN for NJIT on various operating systems like Windows, MacOS, and Linux." />
        <meta name="keywords" content="Cisco VPN, NJIT, install Cisco Secure Client, VPN setup, Windows, Linux, MacOS" />
        <meta name="author" content="Your Name" />
      </Head>
      
      <section className="px-6 py-8  text-white">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Step-by-Step Guide to Install Cisco Secure Client VPN on Linux Distros</h1>
          <p className="text-gray-400 mt-2">
            Follow this guide to install and set up Cisco VPN for NJIT on your operating system.
          </p>
        </header>

        <article>
          <ol className="list-decimal space-y-6 pl-5">
            <li>
              Go to the <a href="https://ist.njit.edu/vpn" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">NJIT VPN download page</a>.
            </li>
            <li>
              Download the package by selecting your operating system (Linux in our case):
              <ul className="list-disc mt-4 pl-6">
                <li>Windows (Intel and AMD processors - most PCs)</li>
                <li>Windows (ARM64 processors - e.g., Surface Pro X and Surface Go)</li>
                <li>MacOS</li>
                <li>Linux</li>
              </ul>
            </li>
            <li>Extract the downloaded zip file.</li>
            <li>
              You should have a <code className="bg-gray-800 px-2 py-1 rounded">vpn</code> folder inside the extracted folder. Open the <code className="bg-gray-800 px-2 py-1 rounded">vpn</code> folder and find the <code className="bg-gray-800 px-2 py-1 rounded">vpn_install.sh</code> script.
            </li>
            <li>
              Run the script with administrator privileges:
              <pre className="bg-gray-800 text-green-400 p-4 mt-4 rounded">
                sudo ./vpn_install.sh
              </pre>
              Accept the license agreement by pressing <code className="bg-gray-800 px-2 py-1 rounded">y</code> when prompted.
            </li>
            <li className='mb-4'>
              Open the Cisco Secure Client App by pressing the <code className="bg-gray-800 px-2 py-1 rounded">Win</code> key and search for <strong>“Cisco Secure Client”</strong>.
            </li>
            <li>In the dialog box, enter <code className="bg-gray-800 px-2 py-1 rounded">vpn.njit.edu</code> and hit "Connect" button</li>
              <Image src={Cisco} alt="Cisco VPN" />
              <li>You will be prompted to enter your UCID and password. Enter your credentials in the pop-up.</li>
            <li>You will see a notification confirming that the VPN is connected.</li>
          </ol>
        </article>
      </section>
    </div>
  );
}
