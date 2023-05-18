import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is FOMO?",
    answer: "FOMO is the utility token for Daily FOMO Tech that is launching on the BNB Chain.",
  },
  {
    question: "What is Daily FOMO Tech?",
    answer: "Daily FOMO Tech is a suite of Telegram bots that token owners can use to drive engagement and new investors. Built over the last 4 months and ready to launch.",
  },
  {
    question: "What is the total supply of FOMO?",
    answer:
      "Total supply is 1,000,000,000",
  },
  {
    question: "Where can I buy FOMO?",
    answer:
      "FOMO will launch on PinkSale for a presale and then be available to trade on PancakeSwap shortly after.",
  },
  {
    question: "How long will the LP be locked for?",
    answer:
      "The liquidity will be locked for 400 days.",
  },
  {
    question: "Is there a transaction fee (tax) for trading FOMO?",
    answer:
      "There is a small fee taken off each buy and sell to power the FOMO ecosystem. The buy tax is 5%, the sell tax is 6%.",
  },
];
