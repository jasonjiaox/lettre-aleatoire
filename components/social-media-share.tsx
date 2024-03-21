'use client'
import * as React from "react"

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "@0xcj/react-share";

interface SocialMediaShareProps {
  name: string
  shareUrl: string
  urlNoHttp: string
}

export function SocialMediaShare({name, shareUrl, urlNoHttp}: SocialMediaShareProps) {
  return (
    <>
      <div className="relative space-y-4 overflow-hidden rounded-lg border bg-background px-2 py-4">
        <div className='inline-block rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'>
          Partager {urlNoHttp}
        </div>

        <div className='m-1 flex flex-row justify-center space-x-1'>
          <FacebookShareButton
            url={shareUrl}
            quote={name}
          >
            <FacebookIcon size={32} round/>
          </FacebookShareButton>
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="1026366508369305"
          >
            <FacebookMessengerIcon size={32} round/>
          </FacebookMessengerShareButton>
          <TwitterShareButton
            url={shareUrl}
            name={name}
          >
            <TwitterIcon size={32} round/>
          </TwitterShareButton>

          <TelegramShareButton
            url={shareUrl}
            name={name}
          >
            <TelegramIcon size={32} round/>
          </TelegramShareButton>

          <WhatsappShareButton
            url={shareUrl}
            name={name}
            separator=": "
          >
            <WhatsappIcon size={32} round/>
          </WhatsappShareButton>

          <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round/>
          </LinkedinShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={name}
            // body will be prepended to the url.
            body=""
          >
            <EmailIcon size={32} round/>
          </EmailShareButton>
        </div>

        <div className='text-muted-foreground'>
          IMPORTANT! Notre site est 100% gratuit et dépend entièrement du soutien de la communauté pour atteindre de
          nouveaux utilisateurs. Si vous aimez ce que nous faisons, envisagez de partager notre travail avec votre
          communauté. Mettez un lien vers cet outil sur votre site web/blog et partagez-le via les réseaux sociaux.
        </div>
      </div>
    </>
  )
}
