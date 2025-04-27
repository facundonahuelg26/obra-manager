import { ROUTES } from '@/utils'
import { TranslationFn } from '../common/types'
export type MenuItem = {
  title: string
  link: string
  icon: string
}

export const menuData = (t: TranslationFn): MenuItem[] => {
  return [
    {
      title: t('linkProjects'),
      link: ROUTES.PROJECTS.MAIN,
      icon: 'uil:rocket',
    },
    {
      title: t('linkCreateProject'),
      link: ROUTES.PROJECTS.CREATE_PROJECT,
      icon: 'basil:plus-solid',
    },
    {
      title: t('linkCalculateMaterials'),
      link: ROUTES.CALCULATE_MATERIALS,
      icon: 'material-symbols:calculate-outline-rounded',
    },
    {
      title: t('linkAnalytics'),
      link: ROUTES.PROJECT_ANALYTICS,
      icon: 'uil:analytics',
    },
  ]
}
