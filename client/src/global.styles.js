import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 3px 5px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

/* CSSTransition classes  */
.menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-primary-exit {
  position: absolute;
}
.menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}


.menu-secondary-enter {
  transform: translateX(110%);
}
.menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-secondary-exit {
  position: absolute;
}
.menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}
`