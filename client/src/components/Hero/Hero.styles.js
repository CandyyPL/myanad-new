import styled from 'styled-components'

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
`

export const HeroTopbar = styled.div`
  width: 100%;
  height: 10%;

  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  .logo {
    grid-column: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      height: 40%;
    }

    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: 500;
    color: #eee;
  }

  .right {
    grid-column: 3 / 4;

    .hamburger {
      width: 60px;
      height: 60px;

      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const HeroContent = styled.div`
  width: 100%;
  height: calc(90vh - 50px);

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    width: 100%;
    height: fit-content;

    padding: 10px;

    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: 400;
    color: #eee;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
  }

  .icon {
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 75%;
    }
  }

  .button {
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: center;
    align-content: center;

    button {
      width: 75%;
      height: 60px;

      background-color: green;

      border: none;
      border-radius: 40px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      color: #eee;
    }
  }
`
