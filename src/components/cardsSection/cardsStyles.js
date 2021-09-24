import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 66%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 5rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 20vh;
  background: #ffffff;
  border-radius: 4px;
  flex-grow: 1;
  margin: 1rem;
  padding: 1.5rem;
`

export const Img = styled.img`
  &.AugmentedReality {
    left: 165px;
    bottom: 100px;
  }

  &.VirtualReality {
    left: 165px;
    bottom: 100px;
  }

  &.Mobile {
    left: 180px;
    bottom: 100px;
    transform: rotate(44deg);
  }
  position: absolute;
  height: auto;
  width: 50%;
`

export const StyledLink = styled(Link)`
  font-size: 1.12rem;
`
