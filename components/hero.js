import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/client/FIRST_IMAGE.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              The $FOMO Token
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              FOMO is the backbone of our market ready decentralized advertising platform. Meet the utility token powering our ecosystem.

            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://ucarecdn.com/5b8abcf1-b81a-464d-8788-ec6ed234a745/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Whitepaper
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className=" lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Our Partners
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className=" text-gray-400 dark:text-gray-400 partnerImgBG ">
              <Ankr />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <img src="img/brands/logo_footer.svg" className="img-fluid partnerImg partnerImgBG" />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <img src="img/brands/pink.png" className="img-fluid partnerImg partnerImgBG" />

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Ankr() {
  return (
    <svg fill="none" height="32" viewBox="0 0 104 32" width="104" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.344 2.441l9.008 4.776c1.382.83 2.676 1.797 2.736 4.647v2.286h-3.541v-3.126L13.58 5.671 3.54 11.024v3.127H0v-2.287c.054-2.835 1.338-3.808 2.711-4.632l9.102-4.796a3.77 3.77 0 0 1 3.53.005zm.005 23.419l8.193-4.588v-3.418h3.54v2.282c-.054 2.85-1.352 3.822-2.735 4.647l-9.003 4.776a3.77 3.77 0 0 1-3.531.005L2.71 24.768C1.338 23.943.06 22.966 0 20.136v-2.282h3.546v3.418l8.267 4.593v-3.71c-2.884-.676-4.776-3.017-4.776-6.158 0-3.802 2.628-6.355 6.544-6.355 3.916 0 6.543 2.553 6.543 6.355 0 3.136-1.896 5.482-4.775 6.159zM13.58 12.768c-2.1 0-3.255 1.145-3.255 3.23 0 2.024 1.215 3.23 3.255 3.23s3.254-1.21 3.254-3.23c0-2.085-1.155-3.23-3.254-3.23zm75.435-4.46h-4.934l-6.34 6.5V5.102h-4.07v19.65h4.07v-4.918l2.093-2.144 5.522 7.062h4.568L82.374 15.1zm6.524 1.94c.77-.77 2.84-2.37 6.746-2.37h.751l.014 3.64-7.511.03v13.205h-4.134V8.293h4.134zM64.526 7.875c-3.121 0-5.082 2.02-5.225 2.178V8.294h-4.133V24.754H59.3V11.183h3.072c.158 0 .311.004.46.01 1.031.034 1.817.202 2.4.508.192.109.37.232.533.366.874.78 1.106 2.108 1.106 4.089v8.603h4.07v-9.833c-.006-4.074-1.872-7.052-6.416-7.052zm-18.203.968a6.04 6.04 0 0 1 1.807 1.703V8.29h4.134v16.46H48.13v-2.42c-.474.913-1.338 1.723-2.558 2.261a7.18 7.18 0 0 1-1.081.38l-.06.016a9.041 9.041 0 0 1-2.177.266 8.932 8.932 0 0 1-3.378-.662c-3.2-1.303-5.452-4.41-5.452-8.034 0-4.8 3.955-8.697 8.83-8.697 1.466 0 2.85.355 4.069.983zm-8.657 7.718c0 3.131 2.084 5.304 5.304 5.304 2.805 0 5.304-1.99 5.304-5.304 0-3.383-2.415-5.304-5.304-5.304-3.28 0-5.304 1.98-5.304 5.304z" fill="currentColor" fill-rule="evenodd"></path></svg>
  );
}
