import { Card } from '../../Card/card'
import { education } from './education.constants'

export const EducationSection = () => {
  return (
    <div className="flex flex-col justify-start text-start gap-[10px]">
      {education.map(({ name, title, date }) => {
        return (
          <Card key={title}>
            <div className="flex flex-col justify-start text-start">
              <h3 className="font-bold text-base">{name}</h3>
              <h3 className="text-base">{title}</h3>
              <p className="italic pt-2.5">{date}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
