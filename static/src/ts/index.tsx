import "../styles/home/home.css";

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
    <Doc className="container">
      <Main className="main" theme={theme}>
        <div className="content">
          <Title className="title" theme={theme}>
            Welcome! This is a title
          </Title>

          <Subtitle className="subtitle" theme={theme}>
            This is a subtitle
          </Subtitle>

          <H1 theme={theme}>This is H1</H1>
          <Text className="body" theme={theme}>
            This is regular text
          </Text>
        </div>
      </Main>
    </Doc>
  );
};

export default Home;

const domContainer = document.querySelector("#root");
ReactDOM.render(<Home />, domContainer);
