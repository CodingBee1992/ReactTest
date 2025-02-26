interface Props {
  title:string,
  description:string,
  image:string,
  link:string
}

const Card = ({title,description,image,link}:Props) => {
    
  return (
    <div className="max-w-sm  mx-auto m-[1rem] bg-zinc-400 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-amber-600 mb-4">{description}</p>

        <a href={link} className="inline-block px-4 py-2 bg-amber-800 text-amber-200 font-semibold rounded-lg shadow hover:text-amber-600 duration-700">
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Card