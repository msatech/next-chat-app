import Button from '@/components/ui/Button'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='p-6'> 
    <Button variant="default"> Click me </Button>
  </div>
}

export default page