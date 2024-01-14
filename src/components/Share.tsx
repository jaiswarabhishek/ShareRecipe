import React from "react"
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstagramIcon,
  InstapaperShareButton,
} from "next-share"

type Props = {
  image: string
  name: string
}

const Share: React.FC<Props> = ({ image, name }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center w-fit">
      <TwitterShareButton
        url={image}
        hashtags={["ShareRecipe"]}
        title={name}
        className="flex items-center justify-center"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={image}
        title={name}
        separator=": "
        className="flex items-center justify-center"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <FacebookShareButton
        url={image}
        quote={name}
        hashtag={"#ShareRecipe"}
        className="flex items-center justify-center"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <InstapaperShareButton
        url={image}
        title={name}
        className="flex items-center justify-center"
      >
        <InstagramIcon size={32} round />
      </InstapaperShareButton>
    </div>
  )
}

export default Share
