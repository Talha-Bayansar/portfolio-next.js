import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Talha Bayansar.<br />Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am newly graduated and am open to new opportunities. I love to code in my free time and would love to fill my free time by working for you.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:talha.bayansar@hotmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;