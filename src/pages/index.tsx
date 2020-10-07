import { NextSeo } from "next-seo";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { FaFacebookF } from "react-icons/fa";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Exsign Studio"
        description="Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem."
      />
      <Header />
      <Body />
    </>
  );
}
