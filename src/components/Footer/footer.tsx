import { Tooltip } from 'flowbite-react'
import { EmailIcon } from '../Icons/email'
import { LinkedInIcon } from '../Icons/linkenIn'
import { PhoneIcon } from '../Icons/phone'
import {
  contacts,
  customTooltipTheme,
} from '../Sections/contacts/contacts.constants'
import { GithubIcon } from '../Icons/github'

export const Footer = () => {
  const phoneNumber = contacts.phone
  const emailAddress = contacts.email

  const handleCopyPhoneClick = () => {
    navigator.clipboard.writeText(phoneNumber)
  }

  const handleEmailClick = () => {
    const mailtoUrl = `mailto:${emailAddress}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="flex flex-row gap-[20px] ml-0 xl:ml-44 self-center xl:self-start pt-6 xl:pt-0 justify-center xl:justify-start">
      <a href={contacts.linkedIn} target="_blank">
        <LinkedInIcon />
      </a>
      <a href={contacts.github} target="_blank">
        <GithubIcon />
      </a>
      <Tooltip
        theme={customTooltipTheme}
        content={`Phone +${phoneNumber} copied!`}
        style="light"
        placement="bottom"
        trigger="click"
        animation="duration-1000"
        arrow={false}
      >
        <a href="#" onClick={handleCopyPhoneClick}>
          <PhoneIcon />
        </a>
      </Tooltip>
      <button onClick={handleEmailClick}>
        <EmailIcon />
      </button>
    </div>
  )
}
