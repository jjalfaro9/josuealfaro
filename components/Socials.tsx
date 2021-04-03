import {Link} from "@chakra-ui/react";
import { FiTwitter, FiInstagram, FiMail, FiGithub } from "react-icons/fi";

const Socials = () => {
    const iconSize: number = 22;
    const emojis: Array<string> = ['👨‍💻', '🤠', '🌴', '🇸🇻', '❤️', '🏎', '💼', '🐲', '🔥'];
    const emoji: string = emojis[Math.floor(Math.random() * emojis.length)];
    return (
      <>
        <Link href="http://twitter.com/jjalfaro9" isExternal>
          <FiTwitter size={iconSize}/>
        </Link>
        <Link href="http://instagram.com/jjalfaro9" isExternal>
          <FiInstagram size={iconSize}/>
        </Link>
        <Link href="/josuealfaro.pdf" isExternal style={{fontSize: iconSize}}>
          { emoji }
        </Link>
        <Link href="mailto:josuejalfaro@gmail.com" isExternal>
          <FiMail size={iconSize}/>
        </Link>
        <Link href="http://github.com/jjalfaro9" isExternal>
          <FiGithub size={iconSize}/>
        </Link>
      </>
    );
  };

  export default Socials;