import { ICONS, ROUTES } from '@/utils'
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
      icon: ICONS.NAV.PROJECTS,
    },
    {
      title: t('linkCreateProject'),
      link: ROUTES.PROJECTS.CREATE_PROJECT,
      icon: ICONS.NAV.CREATE_PROJECT,
    },
    {
      title: t('linkCalculateMaterials'),
      link: ROUTES.CALCULATE_MATERIALS,
      icon: ICONS.NAV.CALCULATE_MATERIALS,
    },
    {
      title: t('linkAnalytics'),
      link: ROUTES.PROJECT_ANALYTICS,
      icon: ICONS.NAV.ANALYTICS,
    },
  ]
}

export const publicMenuData = (t: TranslationFn): MenuItem[] => {
  console.log(t('linkProjects'))
  return [
    {
      title: 'Acerca de',
      link: '#',
      icon: '',
    },
  ]
}
