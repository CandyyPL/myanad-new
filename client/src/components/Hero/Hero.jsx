import React from 'react'
import { HeroContent, HeroTopbar, HeroWrapper } from './Hero.styles'
import logoImg from '@/assets/logo.png'
import stonksImg from '@/assets/stonks.png'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTopbar>
        <div className='logo'>
          <img src={logoImg} alt='logo' />
          <span>MYANAD</span>
        </div>
        <div className='right'>
          <div className='hamburger'>H</div>
        </div>
      </HeroTopbar>
      <HeroContent>
        <div className='text'>
          For business owners who wants to drastically increase their income!
        </div>
        <div className='icon'>
          <img src={stonksImg} alt='stonks' />
        </div>
        <div className='button'>
          <button>TAKE A FREE SURVEY</button>
        </div>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero
