import React from "react";

const Footer = () => {
  return (
    <div>
      <section>
        <div className='flex flex-col items-center justify-center w-full text-white bg-black'>
          <footer className='w-full h-full p-4 m-5 rounded shadow-md flex flex-col space-x-2 justify-center bg-slate-900 items-center'>
            <p className='text-white text-sm'>
              &copy; 2023 Your Company. All rights reserved.
            </p>
            <p className='text-white text-sm'>
              Follow us on{" "}
              <a href='#' className='text-slate-300 hover:underline'>
                Twitter
              </a>{" "}
              and{" "}
              <a href='#' className='text-blue-200 hover:underline'>
                GitHub
              </a>
            </p>
            <div className='flex justify-center '>
              <a href='#' className='text-blue-200 hover:underline'>
                Back to top
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Footer;
