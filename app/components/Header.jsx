import MarvelLogo from "./MarvelLogo"

const Header = () => {
  return (
    <section className="w-10/12 mx-auto py-8 sm:flex justify-between">
        <MarvelLogo />
        <p>Created by Abdelkader Soudani using Next.js</p>
    </section>
  )
}

export default Header