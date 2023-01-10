import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => (
  <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque
          et, enim unde veritatis tenetur atque explicabo pariatur culpa
          deserunt quasi, placeat dignissimos cupiditate dicta aspernatur
          aperiam blanditiis minima, quas dolores voluptatum tempore eum.
          Temporibus ex blanditiis deleniti veritatis placeat ut, odit,
          excepturi facere ipsa architecto in asperiores molestias tenetur ad
          nemo veniam dicta reprehenderit aperiam iure? Doloremque, veniam!
          Voluptatem odit cupiditate exercitationem laborum cumque consequatur
          rerum, doloribus illum accusamus vel modi blanditiis veritatis?
          Deleniti dolorum exercitationem quisquam blanditiis incidunt.
        </p>
      </article>
    </Wrapper>
  </main>
);

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
