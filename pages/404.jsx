import Head from "next/head";
import { useRouter } from "next/router";
import { useMounted } from "nextra/hooks";
import RedbrickLogo from "../images/logo.svg";

const notFoundText = {
  en: "Oops! We can't find the page",
  kr: "앗! 페이지를 찾을 수 없어요",
};

const sorryText = {
  en: "Oh no!",
  kr: "앗, 이런!",
};

const goBackToText = {
  en: "Take me home!",
  kr: "홈으로 가기!",
};

const NotFoundPage = () => {
  const { asPath } = useRouter();
  const mounted = useMounted();
  const lang = asPath.split("/", 2)[1];
  const text = `${notFoundText[mounted ? lang : "en"]}`;
  const sorry = `${sorryText[mounted ? lang : "en"]}`;
  const goBackTo = `${goBackToText[mounted ? lang : "en"]}`;

  return (
    <div className="bg-black w-full h-dvh flex justify-center items-center flex-col gap-8">
      <Head>
        <title>{text}</title>
      </Head>
      <span className="text-8xl text-white">{sorry}</span>
      <h1 className="text-3xl text-white">{text}</h1>
      <div className="flex items-center justify-center gap-4">
        <h2 className="flex items-center justify-center text-2xl font-bold text-white">
          {goBackTo}
        </h2>
        <a href="/" className="hover:scale-110 transition-transform">
          <RedbrickLogo />
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
