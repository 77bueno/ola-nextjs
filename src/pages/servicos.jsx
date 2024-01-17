import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>

    <Head>
      <title>Página de Serviços</title>
      <meta name="description" content="Segunda página..."/>
    </Head>

    <h1>Olá Next.js!</h1>
    <Menu />
    
      <h2>Servicos</h2>
      <ol>
        <li>Dev Full Stack</li>
        <li>Dev Front-End</li>
        <li>Dev Back-End</li>
        <li>DevOps</li>
      </ol>
      <h3>Trabalhos ne pae</h3>
    
    </>
  );
}