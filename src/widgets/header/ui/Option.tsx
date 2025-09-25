import{ memo } from 'react'
import { LanguageSwitcher } from '../../../features/language-switcher'
import DarkModeToggle from '../../../shared/ui/DarkModeToggle'

export const Option = memo(() => {
  return (
    <div className='flex gap-8' >
        <LanguageSwitcher/>
        <DarkModeToggle/>
    </div>
  )
})
