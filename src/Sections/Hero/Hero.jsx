import chira1 from '../../assets/Chira1.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.png'
import twitter_dark from '../../assets/twitter-dark.svg'
import linkedin_dark from '../../assets/linkedin-dark.svg'
import github_dark from '../../assets/github-dark.svg'
import twitter_light from '../../assets/twitter-light.svg'
import linkedin_light from '../../assets/linkedin-light.svg'
import github_light from '../../assets/github-light.svg'
import { useTheme } from '../../Common/ThemeContext'
import styles from './HeroStyles.module.css'

function Hero() {

    const {theme,toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;

    const twitterIcon = theme === 'light' ? twitter_light : twitter_dark;
    const linkedInIcon = theme === 'light' ? linkedin_light : linkedin_dark;
    const githubIcon = theme === 'light' ? github_light : github_dark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={chira1} alt="Profile picture of Harindu Basnayake" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Harindu <br /> Basnayake</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="" target='_blank'>
                    <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="" target='_blank'>
                    <img src={linkedInIcon} alt="linkedIn icon" />
                </a>
                <a href="" target='_blank'>
                    <img src={githubIcon} alt="github icon" />
                </a>
            </span>
            <p className={styles.description}>
                Im a self-taught frontend developer with a passion for creating beautiful and functional websites. <br />
                Im currently looking for new opportunities and challenges.
            </p>
            <a href="" download>
                <button className={styles.hover}>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
