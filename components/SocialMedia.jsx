import React, { useState, useEffect } from 'react';
import { BsLinkedin, BsGithub, BsPersonLinesFill } from 'react-icons/bs';
import { client} from '../client';

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  useEffect(() => {
    const query = '*[_type == "socialMedia"]';

    client.fetch(query).then((data) => {
        setSocialMedia(data);
    });
  }, []);
  
  let linkedinLink;
  let githubLink;
  let resumeLink;

  socialMedia.map((social) =>{
      switch (social.name) {
        case "linkedin":
          linkedinLink = social.link;
          break;

        case "github":
          githubLink = social.link;
          break;

        case "resume":
          resumeLink = social.link;
          break;
      
        default:
          break;
      }
  })

  return (
    <div className="app__social">
        <div>
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
        </div>
        <div>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
        </div>
        <div>
            <a href={resumeLink} target="_blank" rel="noreferrer">
              <BsPersonLinesFill />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia;