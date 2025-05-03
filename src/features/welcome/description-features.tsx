import { Card, CardHeader, CardBody } from '@heroui/card'
import { Image } from '@heroui/image'
import Grid from '../common/grid'

const features = [
  {
    id: 1,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    color: 'success',
  },
  {
    id: 2,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/album-cover.png',
    color: 'success',
  },
  {
    id: 3,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/card-example-6.jpeg',
    color: 'success',
  },
  {
    id: 4,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/card-example-2.jpeg',
    color: 'success',
  },
  {
    id: 5,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/album-cover.png',
    color: 'success',
  },
  {
    id: 6,
    title: 'Daily Mix',
    subtitle: '12 Tracks',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    color: 'success',
  },
]
const DescriptionFeatures = () => {
  return (
    <>
      {features.map((feature) => (
        <Grid item xs={12} sm={2} key={feature.id}>
          <Card className='py-4'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <p className='text-tiny uppercase font-bold'>{feature.title}</p>
              <h4 className='font-bold text-large'>{feature.subtitle}</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={feature.image}
                width={270}
              />
            </CardBody>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default DescriptionFeatures
