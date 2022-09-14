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
//import React from "react";
import ReactDOM from "react-dom";
import React, { useState, useLayoutEffect } from 'react'; //added more

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
});

//export default ThemeContext;

export function ThemeProvider({children}:any) {
  // keeps state of the current theme
  
  //const [userPicked, setUserPicked] = useState(false);

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = useState(prefersDark);
  // paints the app before it renders elements
  useLayoutEffect(() => {
    applyTheme();
  }, [dark]);

  // rewrites set of css variablels/colors
  const applyTheme = () => {
      let theme;
      if (dark) {
          theme = darkTheme;
      }
      if (!dark) {
          theme = lightTheme;
      }

      const root = document.getElementsByTagName('html')[0];
      root.style.cssText = theme.join(';');
  };

  const toggle = () => {
    console.log('Toggle Method Called');

    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
  
    setUserPick(true) // Add this line
    setDark(!dark);
  };

  return (
      <ThemeContext.Provider
          value={{
              dark,
              toggle,
          }}>
          {children}
      </ThemeContext.Provider>
  );
}



const lightTheme = [
  '--bg-color: var(--color-white)',
  '--text-color-primary: var(--color-black)',
  '--text-color-secondary: var(--color-prussianBlue)',
  '--text-color-tertiary:var(--color-azureRadiance)',
  '--fill-switch: var(--color-prussianBlue)',
  '--fill-primary:var(--color-prussianBlue)',
];

const darkTheme = [
  '--bg-color: var(--color-mirage)',
  '--text-color-primary: var(--color-white)',
  '--text-color-secondary: var(--color-iron)',
  '--text-color-tertiary: var(--color-white)',
  '--fill-switch: var(--color-gold)',
  '--fill-primary:var(--color-white)',
];


const Home: any = () => {
  const darkModeActive = true;

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
            Welcome! This is the header
          </Title>

          <Subtitle className="subtitle" theme={theme}>
            This is a subtitle for Slim Shady.
            Dark feels readddy.
            About to spit a verse on your baby.
            The real Shigga Shigga Shiggga Slim Shady.
          </Subtitle>

          <H1 theme={theme}>This is H1</H1>
          <Text className="body" theme={theme}>
            This is regular text.
          </Text>
        </div>
      </Main>
    </Doc>
  );
};

export default Home;

const domContainer = document.querySelector("#root");
ReactDOM.render(<Home />, domContainer);
function setUserPick(arg0: boolean) {
  throw new Error("Function not implemented.");
}

