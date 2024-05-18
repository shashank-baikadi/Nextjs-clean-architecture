'use client'
import { useRouter } from "next/navigation"


export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log('placing our order ')
        router.push('/ ')
        // router.forward()//move forward in next page
        // router.back()//move backward in page 
    }
  return (
    <div>
      <h1>welcome to order-product page</h1>
      <>Order product</>
      <button onClick={handleClick}>Order</button>
    </div>
  )
}