import { cn } from "@/lib/utils";
import { useStickyNavbar } from "@/hooks/useStickyNavbar";
import { useMenu } from "@/hooks/useMenu";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const links = [
  "about",
  "products",
  "benefits",
  "vendors",
  "contacts",
];

const LanguageSwitch = ({ invertColors } : { invertColors: boolean }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => i18n.changeLanguage(language);
  const addButton = (language: string) => (
    <button
      onClick={() => changeLanguage(language)}
      className={cn("decoration-2 mr-1 hover:opacity-75", i18n.language === language ? "underline" : "opacity-50")}
    >{language.toUpperCase()}</button>
  );

  return (
    <div className={cn("font-bold underline-offset-[5px] flex", invertColors ? "text-white" : "text-primary")}>
      {addButton("ru")}
      {addButton("en")}
    </div>
  )
};

interface MenuIconProps {
  expanded: boolean,
  onToggle: () => void,
}

const MenuIcon = ({ expanded, onToggle }: MenuIconProps) => (
  <button className="lg:hidden order-3 ml-5" onClick={() => onToggle()}>
    { expanded ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" fill="white"/>
        </svg> 
      ) : (
        <svg width="24" height="24" className="stroke-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H4"  strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 12H8" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 18H4" strokeWidth="2" strokeLinecap="round"/>
        </svg> 
      )
    }
  </button>
)

export const Navbar = () => {
  const sticky = useStickyNavbar(32);
  const [expanded, toggleMenu] = useMenu();
  const { t } = useTranslation();

  const navbarLinks = links.map((link, index) => (
    <ul key={index}>
      <li>
        <a
          href={`#${link}`}
          onClick={() => expanded && toggleMenu()}
          className="decoration-2 underline-offset-[5px] hover:underline"
        >{t(`navigation.${link}`)}</a>
      </li>
    </ul>
  ));

  return (
    <>
      <div className={cn(sticky && "h-32")}></div>
      <header
        className={cn(
          "z-50 transition-colors", 
          sticky ? "fixed h-16 top-0 w-full bg-white shadow" : "bg-[#F9F6FF] h-32"
        )}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="order-none z-50">
            <a href="/"><img src={logo} className={cn("w-28", expanded && "brightness-0 invert")}/></a>
          </div>
          <nav className={cn(
            "z-40 flex-col gap-8 top-0 left-0 w-full h-screen text-2xl transition-colors bg-primary text-white justify-center items-center lg:flex lg:w-auto lg:h-auto lg:text-base lg:gap-12 flex lg:flex-row lg:bg-transparent lg:text-primary",
              expanded ? "fixed" : "hidden",
            )}
          >{navbarLinks}</nav>
          <div className="flex z-50 order-2">
            <LanguageSwitch invertColors={expanded} />
            <MenuIcon expanded={expanded} onToggle={toggleMenu}/>
          </div>
        </div>
      </header>
    </>
  )
}
