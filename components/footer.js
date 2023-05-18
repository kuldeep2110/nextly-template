import Link from "next/link";
import React from "react";
import Container from "./container";

import {
  AiOutlineTwitter
} from 'react-icons/ai'
import {
  FaTiktok, FaTelegramPlane
} from 'react-icons/fa'

export default function Footer() {
  const navigation = [
    {
      name : "Home",
      link:"./"
    }, 
    {
      name:"Revenue Model",
      link:"#model"
    }, 
    {
      name: "Tokenomics",
      link: "#tokenomics"
    }, 
    {
      name: "Roadmap",
      link:"#roadmap"
    }, 
    {
      name : "FAQ",
      link:"#faq"
    }
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/">
                <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <img
                      src="/img/logo.png"
                      alt="N"
                      width="32"
                      height="32"
                      className="logow"
                    />
                  </span>
                </a>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
             FOMO is the backbone of our market ready decentralized advertising platform. Meet the utility token powering our ecosystem.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={item.link}>
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/">
                  <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/TheDailyFOMO"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Twitter</span>
                <AiOutlineTwitter className="iconFooter" />
              </a>
              <a
                href="https://t.me/DailyFOMOToken"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Telegram</span>
                <FaTelegramPlane  className="iconFooter"/>
              </a>
              <a
                href="https://www.tiktok.com/@thedailyfomo"
                target="_blank"
                rel="noopener">
                <span className="sr-only">tiktok</span>
                <FaTiktok  className="iconFooter" />
              </a>
              <a href="https://www.dailyfomo.net" target="_blank" rel="noopener">
                <span className="sr-only">Dailyfomo</span>
                <img src='favicon.ico' className="img-fluid iconFooter" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. 
          Made with by Daily FOMO. Development by   Web3Templates.
          {/*<a href="https://web3templates.com/" target="_blank" rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Glazestock
          </a>*/}
        </div>
      </Container>
      {/* Do not remove this 
      <Backlink />*/}
    </div>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
