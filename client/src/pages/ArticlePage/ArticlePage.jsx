import "./ArticlePage.scss";
import socialMedia from "../../../public/images/social-media.png"

function ArticlePage() {

    return (
        <main className="container">
            <div className="hero">
                <h1 className="hero__title">DeMar DeRozan makes surprise cameo in Kendrick Lamar’s ‘Not Like Us’ video as Lakers rumors swirl</h1>
                <div>
                    <h4 className="hero__subtitle">Bradley Locker via New York Post</h4>
                    <p className="hero__time">1h ago</p>
                </div>
                
            </div>
            <article className="article">
                <p className="article__content">One of the NBA’s most intriguing remaining free agents is living it up — and maybe hinting at his new team.</p>
                <p className="article__content">Six-time All-Star DeMar DeRozan was seen in the music video for Kendrick Lamar’s hit rap single “Not Like Us,” which was released on July 4.</p>
                <p className="article__content">DeRozan, who played for the Bulls last season, appeared stoically for about three seconds as Lamar sang the lyrics, “I’m glad DeRoz’ came home, y’all didn’t deserve him neither.”</p>
                <p className="article__content">With the line, Lamar seems to applaud the fact that DeRozan left Canadian rapper Drake’s beloved Raptors in 2018.</p>
                <p className="article__content">The 34-year-old DeRozan and 37-year-old Lamar each hail from Compton, Calif., and the NBA star has supported the lyricist in the recent past.</p>
                <p className="article__content">DeRozan, Russell Westbrook and other California-area athletes accompanied Lamar on stage at his “The Pop Out Show” in Inglewood on June 19.</p>
                <p className="article__content">In fact, DeRozan’s Los Angeles area prominence may not be a coincidence as he zeroes in on a new franchise.</p>
                <p className="article__content">With DeRozan wrapping up his three-year, $81.9 million deal with the Chicago Bulls in 2023-24, the 16-year veteran has been linked to the Lakers, potentially via a sign-and-trade with Chicago.</p>
                <p className="article__content">Other teams that could make a run at DeRozan include the Heat and Clippers.</p>
                <p className="article__content">During his three seasons in the Windy City, DeRozan averaged 25.5 points, 4.7 rebounds, 5.1 assists and 1.1 steals per game, notching two All-Star appearances and solidifying himself as one of the most clutch players in the league.</p>
                <p className="article__content">Despite DeRozan’s individual achievement, the Bulls went just 125-121 overall in that span, making the playoffs in only one season.</p>
                <p className="article__content">Not only because of DeRozan, Lamar’s music video has already eclipsed 12 million views in a little more than 13 hours of being released, continuing the song’s broader popularity.</p>
                <p className="article__content">“Not Like Us” has spent eight straight weeks on the Billboard Top 100 and helped Lamar win Best Male Hip-Hop Artist at the 2024 BET Awards.</p>
                <p className="article__content">If DeRozan does indeed call Crypto.com Arena home, he’d join a star-studded crew in LeBron James and Anthony Davis — and might need to make the Lamar diss track his walk-out tune.</p>
                <div className="article__shareLinks">
                    <img className="shareLinks" src={socialMedia} alt="social media links" />
                </div>
            </article>
        </main>
    )
}

export default ArticlePage