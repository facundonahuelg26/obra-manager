import { getTranslations } from 'next-intl/server'
import {
  Concept,
  DescriptionFeatures,
  Grid,
  LayoutContainer,
  Login,
} from '@/features'
const WelcomePage = async () => {
  const t = await getTranslations('WelcomePage')
  console.log(t)
  return (
    <LayoutContainer>
      <Grid container gap={4}>
        <Grid item xs={12} sm={6}>
          <Concept />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Login />
        </Grid>
      </Grid>
      <Grid container gap={4}>
        <DescriptionFeatures />
      </Grid>
    </LayoutContainer>
  )
}

export default WelcomePage
