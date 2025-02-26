import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const links =[
  {
    href: "https://www.youtube.com/",
    label:"YouTube",
    icon:<FaYoutube className="h-6 w-6 text-red-600"/>
  },
  {
    href: "https://www.twitter.com/",
    label:"Twitter",
    icon:<FaTwitter className="h-6 w-6 text-sky-300"/>
  },
  {
    href: "https://www.github.com/",
    label:"Github",
    icon:<FaGithub className="h-6 w-6 text-gray-800"/>
  },
  {
    href: "https://www.instagram.com/",
    label:"Instagram",
    icon:<FaInstagram className="h-6 w-6 text-pink-600"/>
  },
]

const Contact = () => {
  return (
    <section className="bg-zinc-300 py-12 px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-extrabold text-amber-500 mb-6">Contact Me</h2>

      <div className="flex items-center">
        {links.map((link)=>(
          <a href={link.href} key={link.label} target="_blank" className="flex items-center space-x-2 text-amber-500 hover:text-amber-950 mr-[2rem]">
            {link.icon}
            <span className="text-lg">
                  {link.label}
            </span>
          </a>
        ))}
      </div>

    </section>
  ) 
}

export default Contact