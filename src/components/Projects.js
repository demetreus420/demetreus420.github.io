import React from 'react';
import {
  ProjectContainer,
  ProjectLink,
  ProjectsStyled,
} from './styled/ProjectsStyled';

const Projects = () => {
  return (
    <ProjectsStyled>
      <ProjectContainer><h2>My Projects</h2></ProjectContainer>
      <ProjectLink href='https://demetreus420.github.io/usof/'>
        <ProjectContainer>
          <h3>USOF</h3>
          <p>
            A clone of Stack Overflow implemented in React.js and with help of
            Stack Exchange API.
          </p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href="https://demetreus420.github.io/ustore/">
        <ProjectContainer>
          <h3>USTORE</h3>
          <p>This is my store coded with pure JS, HTML and SCSS.</p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href='https://demetreus420.github.io/frontend-game/'>
        <ProjectContainer>
          <h3>Frontend Game</h3>
          <p>
            This is a team project(frontend based game) which is implementation
            of Tetris and developed in React.js React-Router-DOM lib and
            Styled-components lib.
          </p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href="https://github.com/demetreus420/uchat">
        <ProjectContainer>
          <h3>uChat</h3>
          <p>
            My desktop implementation of telegram which I developed with my two
            teammates. I was writing a back-end part wich was working with
            database and I did a little part of interface.
          </p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href="https://github.com/demetreus420/uls">
        <ProjectContainer>
          <h3>Ls</h3>
          <p>My own implementation of unix command "ls"</p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href="https://github.com/demetreus420/ush">
        <ProjectContainer>
          <h3>Shell</h3>
          <p>
            This is implementation of Bash, with wich you can do most part of
            usefull things which present in original bash.
          </p>
        </ProjectContainer>
      </ProjectLink>
      <ProjectLink href="https://github.com/demetreus420/libmx">
        <ProjectContainer>
          <h3>Libmx</h3>
          <p>
            My implementation of standard C lib for strings numbers and memory
            manipulating functions.
          </p>
        </ProjectContainer>
      </ProjectLink>
    </ProjectsStyled>
  );
};

export default Projects;
