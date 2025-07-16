import React from "react";
import "./SocialSelector.css";
import { useState, useEffect } from "react";
import { getSocialMedias } from "../../services/SocialMedia";
import { SocialMedia } from "../../types/SocialMedia";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Loader from "../Loader/Loader";

const iconMap: Record<string, any> = {
  github: FaGithub,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

export default function SocialSelector() {
  const [socialLinks, setSocialLinks] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);

// Obtener redes sociales usando la función getSocialMedias
useEffect(() => {
    const fetchSocialLinks = async () => {
        try {
            const data = await getSocialMedias();
            setSocialLinks(data);
        } catch (error) {
            console.error("Error fetching social links:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchSocialLinks();
}, []);

  return (
    <>
      <div className="social">
      {loading ? (
        <Loader />
      ) : (
        socialLinks.map(({ name, icon_url, profile_url }) => {
          const Icon = iconMap[name.toLowerCase()];
          return (
            <a
              key={name}
              href={profile_url}
              target="_blank"
              rel="noopener noreferrer"
              title={name + " Profile"}
            >
              {Icon
                ? Icon({ className: "social-icon" })
                : (
                  <img
                    className="social-icon"
                    src={icon_url}
                    alt={name}
                  />
                )
              }
            </a>
          );
        })
      )}
    </div>
    </>
  );
}
