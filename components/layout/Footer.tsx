const items = [
  { label: "Discord", href: "https://discord.avlanc.com" },
  { label: "Twitter", href: "https://x.com/Samarth1098" },
  { label: "GitHub", href: "https://github.com/bugsum" },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-center py-4">
      <ul className="flex space-x-6 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
