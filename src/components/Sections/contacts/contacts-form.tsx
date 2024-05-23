import { Alert, Label, TextInput, Textarea } from 'flowbite-react'
import { Card } from '../../Card/card'
import {
  customInputTheme,
  customLableTheme,
  customTextareaTheme,
} from './contacts.constants'
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import emailjs from '@emailjs/browser'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isDisable, setIsDisable] = useState(true)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState({ isShow: false, color: '', message: '' })

  const handleChangeUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value)
    },
    []
  )
  const handleChangeUserEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserEmail(e.target.value)
    },
    []
  )
  const handleChangeMessage = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
    },
    []
  )

  useEffect(() => {
    setIsDisable(!userName || !userEmail || !message)
  }, [message, userEmail, userName])

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      try {
        const res = await emailjs.sendForm(
          'service_0vy7tar',
          'template_uw6855d',
          form.current,
          'dYf8U5g1SvOQ4SQ0W'
        )

        if (res.text === 'OK') {
          setUserName('')
          setUserEmail('')
          setMessage('')
          setAlert({
            isShow: true,
            color: 'success',
            message: 'Your message has been sent!',
          })
        }
      } catch (error) {
        setAlert({
          isShow: true,
          color: 'failure',
          message: 'Something went wrong! Please try again.',
        })
        console.log(error)
      }
    }
  }

  const closeAlert = useCallback(() => {
    setAlert({ isShow: false, color: '', message: '' })
  }, [])

  return (
    <Card>
      <div className="flex flex-col gap-[20px] w-full items-start">
        <p className="text-sm md:text-base">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form
          className="flex flex-col gap-[5px] md:gap-4 w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[10px]">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Your Name"
                  theme={customLableTheme}
                />
              </div>
              <TextInput
                id="name"
                type="text"
                theme={customInputTheme}
                required
                className="w-full"
                name="user_name"
                value={userName}
                onChange={handleChangeUserName}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <div className="mb-2 bloc self-start">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                required
                theme={customInputTheme}
                className="w-full"
                name="user_email"
                value={userEmail}
                onChange={handleChangeUserEmail}
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Message" />
            </div>
            <Textarea
              id="message"
              required
              theme={customTextareaTheme}
              className="w-full"
              rows={5}
              name="message"
              value={message}
              onChange={handleChangeMessage}
            />
          </div>
          <input
            type="submit"
            value="Send"
            disabled={isDisable}
            className={`${
              isDisable
                ? 'bg-gray-300 bg-opacity-50 cursor-default'
                : 'bg-yellow-100 bg-opacity-50 cursor-pointer hover:shadow-main active:bg-yellow-200 active:bg-opacity-50'
            } w-full py-2.5 px-5 rounded-lg focus:outline-none focus-visible:outline-none text-sm md:text-base`}
          />
        </form>
        {alert.isShow && (
          <Alert color={alert.color} onDismiss={closeAlert} className="w-full">
            <span className="font-medium">{alert.message}</span>
          </Alert>
        )}
      </div>
    </Card>
  )
}
