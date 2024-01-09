import gfgLogo from "/gfg.svg";

const Footer = () => {
  return (
    <footer className="p-1 dark:bg-custom-dark-2 bg-custom-grey flex items-center justify-center">
       <span className="flex flex-row items-center">
        <img src={gfgLogo} alt="gfg" />
        <span className="flex flex-col mx-2" >
          <span className="sm:text-2xl md:text-xl font-bold dark:text-slate-200">GeeksforGeeks</span>
          <span className="text-gfg-green text-xs font-medium">Chandigarh University</span>
        </span>
       </span>
    </footer>
  )
}

export default Footer