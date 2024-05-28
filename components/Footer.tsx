import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <section className="flex items-end gap-2">
        <Logo
          isGrayScaled={true}
          width={32}
        />
        <span>@beommee 2024</span>
      </section>
    </footer>
  );
};

export default Footer;
