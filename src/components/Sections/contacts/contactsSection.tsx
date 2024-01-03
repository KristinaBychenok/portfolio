import { Tooltip } from 'flowbite-react'
import { Card } from '../../Card/card'
import { EmailIcon } from '../../Icons/email'
import { LinkedInIcon } from '../../Icons/linkenIn'
import { LocationIcon } from '../../Icons/location'
import { PhoneIcon } from '../../Icons/phone'
import { contacts, customTooltipTheme } from './contacts.constants'
import { ContactsForm } from './contacts-form'

export const ContactsSection = () => {
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
    <>
      <Card>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row items-center gap-[10px]">
            <button onClick={handleEmailClick}>
              <EmailIcon />
            </button>
            <p>{contacts.email}</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <Tooltip
              theme={customTooltipTheme}
              content={`Phone +${phoneNumber} copied!`}
              style="light"
              placement="left"
              trigger="click"
              animation="duration-1000"
              arrow={false}
            >
              <a href="#" onClick={handleCopyPhoneClick}>
                <PhoneIcon />
              </a>
            </Tooltip>
            <p>{contacts.phone}</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <LocationIcon />
            <p>{contacts.location}</p>
          </div>

          <div className="flex flex-row items-center gap-[10px]">
            <a href={contacts.linkedIn} target="_blank">
              <LinkedInIcon />
            </a>
            <p className="text-left">{contacts.linkedIn}</p>
          </div>
        </div>
      </Card>
      <ContactsForm />
    </>
  )
}
