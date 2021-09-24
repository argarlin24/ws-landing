import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-around;
  padding: 3rem;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    flex-direction: row;
    width: 66%;
    padding: 5rem 0;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  margin: 1rem auto;
  padding: 1.5rem;
  flex-shrink: 0;
  height: 7rem;
  width: 15rem;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.tablet}) {
    height: 10rem;
    width: 18rem;
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    height: 9rem;
    width: 13em;
    margin: 0;
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.desktop}) {
    height: 12rem;
    width: 18rem;
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.xldesktop}) {
    height: 14rem;
    width: 22rem;
  }
`
export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 27px;
`
export const CardText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 17px;
`
export const Img = styled.img`
  position: absolute;
  height: auto;
  width: 30%;

  &.AugmentedReality {
    left: 220px;
    bottom: 95px;
  }

  &.VirtualReality {
    left: 210px;
    bottom: 90px;
  }

  &.Mobile {
    left: 240px;
    bottom: 100px;
    transform: rotate(-1deg);
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.tablet}) {
    &.AugmentedReality {
      left: 250px;
      bottom: 120px;
    }

    &.VirtualReality {
      left: 250px;
      bottom: 130px;
    }

    &.Mobile {
      left: 280px;
      bottom: 140px;
    }
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    width: 40%;

    &.AugmentedReality {
      left: 170px;
      bottom: 110px;
    }

    &.VirtualReality {
      left: 170px;
      bottom: 110px;
    }

    &.Mobile {
      left: 200px;
      bottom: 120px;
    }
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.desktop}) {
    width: 40%;

    &.AugmentedReality {
      left: 220px;
      bottom: 130px;
    }

    &.VirtualReality {
      left: 220px;
      bottom: 140px;
    }

    &.Mobile {
      left: 260px;
      bottom: 150px;
    }
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.xldesktop}) {
    width: 40%;

    &.AugmentedReality {
      left: 260px;
      bottom: 140px;
    }

    &.VirtualReality {
      left: 260px;
      bottom: 140px;
    }

    &.Mobile {
      left: 300px;
      bottom: 160px;
    }
  }
`
