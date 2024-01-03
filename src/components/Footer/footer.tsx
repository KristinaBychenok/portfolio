import { Tooltip } from 'flowbite-react'
import { EmailIcon } from '../Icons/email'
import { LinkedInIcon } from '../Icons/linkenIn'
import { PhoneIcon } from '../Icons/phone'
import {
  contacts,
  customTooltipTheme,
} from '../Sections/contacts/contacts.constants'

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
    <div className="flex flex-row gap-[20px] lg:ml-32 2xl:ml-44 xl:ml-44 max-lg:self-center max-lg:pt-6">
      <a href={contacts.linkedIn} target="_blank">
        <LinkedInIcon />
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
