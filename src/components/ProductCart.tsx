import { ProductList } from "../models/ProductObject"

type Props = {
  cartList: ProductList[]
};

export default function ProductCart({ cartList }: Props) {
  return (
    <>
      {
        cartList.map((item, index) => {
          return (
            <div key={index} className="text-center rounded-md shadow-lg flex flex-col h-[400px]">
              <div className="h-52 relative overflow-hidden bg-gray-100 shadow-sm">
                <img className='object-contain w-full h-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={item.thumbnail} alt=" thumbnail" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-base mt-2 line-clamp-2">{item.description}</p>
                <p className="text-base mt-2">
                  <span className="line-through">{item.price}</span> -
                  <span>{item.discountPercentage}</span>
                </p>
                <button className="text-base mt-2 px-4 py-2 text-white bg-slate-600 rounded-lg ">Add to cart</button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
