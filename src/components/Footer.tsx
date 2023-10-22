import logo from "@/assets/logo.png"
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container pt-6 pb-24 flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-start lg:gap-0">
        <div className="">
          <a href="/"><img src={logo} className="w-28"/></a>
        </div>
        <p className="text-xs text-[#3A2A68] text-opacity-50">{t("footer.legal_name")}</p>
      </div>
    </footer>
  )
};
