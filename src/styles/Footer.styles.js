import styled from 'styled-components';

export const FooterWrap = styled.footer`
  padding: 2rem;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
  }
  @media (min-width: 1100px) {
    padding: 2rem 4rem;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid hsla(0, 0%, 100%, 50%);
  margin: 1rem;
  padding: 1rem;
  p {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--lightGray);
  }
  h2 {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0.6rem;
    padding: 1rem;
    width: 100%;
    p {
      font-size: 1rem;
      padding: 1rem 0 0;
    }
    h2 {
      font-size: 2.5rem;
      padding: 1rem 0;
    }
  }
  @media (min-width: 1100px) {
    padding: 1.75rem;
    h2 {
      font-size: 4rem;
    }
  }
`;
