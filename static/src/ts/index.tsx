import styles from "../styles/home/Home.module.css";

import { styled } from "@stitches/react";
import {
  dark_bg,
  dark_h1,
  dark_text,
  dark_title,
  light_bg,
  light_h1,
  light_text,
  light_title,
} from "../styles/theme/Colors";
import React from "react";
import ReactDOM from "react-dom";

const Home: any = () => {
  const darkModeActive = false;

  const theme = darkModeActive ? "dark" : "light";

  const Main = styled("div", {
    variants: {
      theme: {
        dark: {
          backgroundColor: dark_bg,
        },
        light: {
          backgroundColor: light_bg,
        },
      },
    },
  });

  const Doc = styled("div", {
    variants: {
      theme: {
        dark: {
          backgroundColor: dark_bg,
        },
        light: {
          backgroundColor: light_bg,
        },
      },
    },
  });

  const Title = styled("h1", {
    variants: {
      theme: {
        dark: {
          color: dark_title,
        },
        light: {
          color: light_title,
        },
      },
    },
  });

  const Subtitle = styled("p", {
    variants: {
      theme: {
        dark: {
          color: dark_text,
        },
        light: {
          color: light_text,
        },
      },
    },
  });

  const H1 = styled("h1", {
    variants: {
      theme: {
        dark: {
          color: dark_h1,
        },
        light: {
          color: light_h1,
        },
      },
    },
  });

  const Text = styled("p", {
    variants: {
      theme: {
        dark: {
          color: dark_text,
        },
        light: {
          color: light_text,
        },
      },
    },
  });

  return (
    <Doc className={styles.container}>
      <Main className={styles.main} theme={theme}>
        <div className={styles.content}>
          <Title className={styles.title} theme={theme}>
            Welcome!
          </Title>

          <Subtitle className={styles.subtitle} theme={theme}>
            Have an NFT as gratitude for coming, start by connecting your
            wallet.
          </Subtitle>

          <H1 theme={theme}>My Story</H1>
          <Text className={styles.body} theme={theme}>
            Hi, my name is Jorge Menjivar
          </Text>
        </div>
      </Main>
    </Doc>
  );
};

export default Home;

const domContainer = document.querySelector("#root");
ReactDOM.render(<Home />, domContainer);
