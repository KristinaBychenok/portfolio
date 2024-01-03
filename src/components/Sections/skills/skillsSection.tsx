import { Badge } from '../../Badge/badge'
import { Card } from '../../Card/card'
import { skills } from './skills.constants'

export const SkillsSection = () => {
  return (
    <Card>
      <div className="flex flex-col flex-wrap gap-[25px]">
        {skills.map(({ name, skills }) => {
          return (
            <div key={name} className="w-full">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-start font-semibold">{name}</h3>
                <div className="flex flex-row flex-wrap gap-[10px]">
                  {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
