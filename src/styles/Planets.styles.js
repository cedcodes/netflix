import styled from 'styled-components';

export const PlanetsWrap = styled.main`
  margin-top: 14rem;
  text-align: center;
  position: relative;
  padding: 0 2.5rem;
  z-index: 1;
`;

export const PlanetsImageWrap = styled.div`
  position: relative;
  margin-bottom: 5rem;
  img {
    display: block;
    margin: auto;
    max-width: 50%;
  }
  .geology {
    position: absolute;
    max-width: 10rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
`;

export const PlanetsInfo = styled.div``;

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
  }
`;
export const PlanetsButton = styled.button``;
