import React from 'react';
import './styles/Footer.css';
import { Icon, InlineIcon } from '@iconify/react';
import youtubeFilled from '@iconify-icons/ant-design/youtube-filled';
import facebookFilled from '@iconify-icons/ant-design/facebook-filled';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import twitterCircleFilled from '@iconify-icons/ant-design/twitter-circle-filled';
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled';


class Footer extends React.Component {
    render() {
        return(
            <div className="footerContainerMain">
                <div className="footerContainerMain_1">
                    <div className="footerNav">
                        <ul>
                            <li>uno</li>
                            <li>dos</li>
                            <li>tres</li>
                            <li>cuatro</li>
                        </ul>
                    </div>
                    <div className="footerMid">
                        <div className="footerMid__links">
                            <ul>
                                <li>link1</li>
                                <li>link2</li>
                                <li>link3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerFin">
                        <div className="footerFin__contact">
                            <ul>
                                <li>contact1</li>
                                <li>contact2</li>
                                <li>contact3</li>
                                <li>contact4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerContainerLow">
                    <div className="footerContainerLow__items">
                        <a href="https://github.com/LeoAlexCas"><Icon id="github" icon={githubFilled} /></a>
                        <a href="https://www.facebook.com/leonardo.tobar.165"><Icon id="facebook" icon={facebookFilled} /></a>
                        <a href="https://twitter.com/leoytobar"><Icon id="twitter" icon={twitterCircleFilled} /></a>
                        <a href="https://www.youtube.com/channel/UCFsk-smfqS4cnGZm_f7hA4g"><Icon id="youtube" icon={youtubeFilled} /></a>
                        <a href="https://www.linkedin.com/in/leonardo-castro-tobar-623309201/"><Icon id="linkedin" icon={linkedinFilled} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;