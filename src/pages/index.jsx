import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Meu app Next.js</title>
      <meta name="description" content="Terceira página..."/>
    </Head>
    
    <h1>Olá Next.js!</h1>
    <Menu />
      <h2>Bem vindo ao Next.Js</h2>
      <h3>Página Inicial</h3>
    </>
  );
}