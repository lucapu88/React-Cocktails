import React from 'react';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaGithubSquare,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';

const links = [
  {
    url: '/',
    text: 'Home',
    icon: <AiFillHome className="nav-icon" />,
  },
  {
    url: '/about',
    text: 'Chi Siamo',
    icon: <RiTeamFill className="nav-icon" />,
  },
  {
    url: '/contattaci',
    text: 'contattaci',
    icon: <AiFillMessage className="nav-icon" />,
  },
];

const LinkComponent = ({ classLink }) => {
  const { closeSidebar } = useGlobalContext();

  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <NavLink
            key={link.text}
            to={link.url}
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
            onClick={closeSidebar}
          >
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </NavLink>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: 'https://www.facebook.com/',
    icon: <FaFacebookSquare className="nav-icon" />,
  },
  {
    url: 'https://twitter.com/home?lang=it',
    icon: <FaTwitterSquare className="nav-icon" />,
  },
  {
    url: 'https://www.youtube.com/channel/UCVPzu5zrXrt8cgSEm73zVzA',
    icon: <FaYoutubeSquare className="nav-icon" />,
  },
  {
    url: 'https://github.com/lucapu88',
    icon: <FaGithubSquare className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className="nav-item">
            <a
              href={link.url}
              alt={link.url}
              target="_blank"
              className="nav-link"
            >
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };
