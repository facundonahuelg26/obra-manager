import { Button, ButtonProps } from '@heroui/button'

const CustomButton = ({ className = '', ...props }: ButtonProps) => {
  return <Button className={`font-medium ${className}`} {...props} />
}
export default CustomButton
