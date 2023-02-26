import FacebookIcon from "./ui/FacebookIcon"
import InstagramIcon from "./ui/InstagramIcon"
import TwitterIcon from "./ui/TwitterIcon"

const Footer = () => {
  return (
    <div className="container mx-auto my-auto">
      <div>
        <hr className="mt-5 mb-5 border-b-2 " />
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl tracking-tight my-5 mb-5">Elmo Nickol</span>
        {/* FB, IG, TWITTER, EMAIL to the right */}
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />

        </div>

      </div>

    </div>
  )
}

export default Footer

