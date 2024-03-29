import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  PageContainer,
  Bloc,
  Container
} from "./Index.styled";

export default function Home() {

  return (
    <>
      <Head>
        <title>Portefolio Benoît Thiennard Husson Desmartin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageContainer>
        <Container>
          <Bloc>
            <ul>
              <li>
                <Link href="/">
                  <a>Lien 1</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Lien 2</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Lien 3</a>
                </Link>
              </li>
            </ul>
          </Bloc>
          <Bloc alignItems="flex-start" flexGrow="1">
            <h1>Hi, I'm Benoît</h1>
            <br />
            <h3>Frontend developer</h3>
            <br />
            <p>Experience in Frontend development, UX and Motion Design.</p>
          </Bloc>
          <Bloc flexGrow="4" alignItems="center">
            <h2>PHOTO</h2>
          </Bloc>
        </Container>
      </PageContainer>
    </>
  );
}
