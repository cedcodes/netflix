import styled from 'styled-components';

export const PlanetsWrap = styled.main`
  margin-top: 14rem;
  text-align: center;
  position: relative;
  padding: 0 2.5rem;
  z-index: 1;
  @media (min-width: 768px) {
    margin-top: 7rem;
  }
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const PlanetsImageWrap = styled.div`
  position: relative;
  margin-bottom: 5rem;
  img {
    display: block;
    margin: auto;
    max-width: 50%;
    @media (min-width: 1100px) {
      max-width: 100%;
      width: 50rem;
      margin-left: 10rem;
    }
  }
  .geology {
    position: absolute;
    max-width: 10rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    @media (min-width: 768px) {
      max-width: 15rem;
      top: 60%;
    }
    @media (min-width: 1100px) {
      max-width: 20rem;
      top: 60%;
      left: 42%;
    }
  }
`;

export const PlanetsInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1100px) {
      flex-direction: column;
      width: 40%;
      padding-right: 2rem;
    }
  }
`;

export const PlanetsInfoWrap = styled.div`
  h1 {
    font-size: 4rem;
    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 2.4;
    margin: 2rem 0 0;
  }
  @media (min-width: 768px) and (max-width: 1110px) {
    margin-right: 70px;
    text-align: left;
  }
  @media (min-width: 1100px) {
    h1 {
      font-size: 7rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export const PlanetsLink = styled.div`
  margin-top: 2rem;
  color: hsla(0, 0%, 100%, 50%);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }
  img {
    margin-left: 0.4rem;
  }
  a,
  img {
    color: var(--white);
    font-weight: 700;
  }
  @media (min-width: 1100px) {
    font-size: 1.5rem;
    padding: 4rem 0;
    display: block;
  }
`;

export const PlanetsTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 7rem;
  border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
  z-index: 50;
  @media (min-width: 768px) {
    position: static;
    display: block;
    min-width: 268px;
  }
  @media (min-width: 1100px) {
    width: 100%;
  }
  button {
    font-family: 'Spartan', sans-serif;
    position: relative;
    display: block;
    color: var(--lightGray);
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 2px;
    flex: 1;
    width: 100%;
    padding: 2rem 0;
    margin: 0 2rem;

    &.active,
    &:hover {
      color: var(--white);

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
      }
      .mercury & {
        &::after {
          background-color: var(--mercury);
        }
      }
      .venus & {
        &::after {
          background-color: var(--venus);
        }
      }
      .earth & {
        &::after {
          background-color: var(--earth);
        }
      }
      .mars & {
        &::after {
          background-color: var(--mars);
        }
      }
      .jupiter & {
        &::after {
          background-color: var(--jupiter);
        }
      }
      .saturn & {
        &::after {
          background-color: var(--saturn);
        }
      }
      .uranus & {
        &::after {
          background-color: var(--uranus);
        }
      }
      .neptune & {
        &::after {
          background-color: var(--neptune);
        }
      }
      .earth & {
        &::after {
          background-color: var(--earth);
        }
      }
    }
    @media (min-width: 768px) {
      &::after {
        display: none;
      }
      padding: 0 2rem;
      margin: 0;
      width: 100%;
      text-align: left;
      line-height: 4rem;
      color: var(--white);
      border: 1px solid hsla(0, 0%, 100%, 20%);
      transition: 0.3s;
      &:not(:first-child) {
        margin-top: 1.6rem;
      }
      &:hover {
        border-color: var(--darkGray);
        background: var(--darkGray);
      }

      &.active {
        .mercury & {
          background-color: var(--mercury);
          border-color: var(--mercury);
        }
        .venus & {
          background-color: var(--venus);
          border-color: var(--venus);
        }

        .earth & {
          background-color: var(--earth);
          border-color: var(--earth);
        }

        .mars & {
          background-color: var(--mars);
          border-color: var(--mars);
        }

        .jupiter & {
          background-color: var(--jupiter);
          border-color: var(--jupiter);
        }

        .saturn & {
          background-color: var(--saturn);
          border-color: var(--saturn);
        }

        .uranus & {
          background-color: var(--uranus);
          border-color: var(--uranus);
        }

        .neptune & {
          background-color: var(--neptune);
          border-color: var(--neptune);
        }
      }
    }
    @media (min-width: 1100px) {
      font-size: 1.3rem;
      width: 100%;
      height: 7rem;
    }
  }
`;
