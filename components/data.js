import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/client/SECOND_IMAGE.png";
import benefitTwoImg from "../public/img/client/THIRD_IMAGE.png";

const benefitOne = {
  id: "model",
  title: "Revenue Model",
  desc: "Tokens can use Daily FOMO Tech to send buy notifications within Telegram. Notifications include an ad unit that is available to purchase through the FOMO ad network. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Scaleable buy bot",
      desc: "A free to use buy bot for tokens",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Real-time trending",
      desc: "The most accurate list of what’s trending",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Group Rewards",
      desc: "Rewards paid in FOMO",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "$FOMO Tokenomics",
  desc: "FOMO is designed to scale with low taxes and ongoing marketing funds.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Total Supply: ",
      desc: "1,000,000,000",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Buy Tax",
      desc: "5% (2% LP, 3% Marketing)",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Sell Tax",
      desc: "6% (2% LP, 3% Marketing, 1% Team)",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
