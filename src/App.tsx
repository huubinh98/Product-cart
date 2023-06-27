/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductBase, ProductList } from './models/ProductObject'
import productService from './servie/api';
import ProductCart from './components/ProductCart';
function App() {
  const [ProductList, setProductList] = useState<ProductList[]>()
  const [search, setSearch] = useState<string>("")
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [limit, setLimit] = useState<number>(20)
  const [total, setTotal] = useState<number>(0)

  const getAllProducts = async () => {
    const data = await productService.getProduct(limit)
    setTotal(data.total)
    setProductList(data.products)
  }

  const handleChangeSearch = async () => {
    const dataSearch = await productService.getSearchProduct(search)
    setProductList(dataSearch.products)
  }

  const infiniteScroll = () => {
    if (ProductList && ProductList?.length >= total || search.length) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setLimit(limit + 20)
    }, 500);

  }

  // Effect
  useEffect(() => {
    if (search === '') {
      getAllProducts()
    }
  }, [search])

  useEffect(() => {
    getAllProducts()
  }, [limit])

  return (
    <div className='py-8'>
      <h2 className="text-center font-semibold text-2xl mb-6">Products Cart</h2>
      <div className='text-center w-full mb-4'>
        <input
          type="text"
          placeholder='Search title'
          className='text-base border border-solid border-current rounded-md w-1/2 p-2'
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className='border-solid border border-current rounded-md p-2 ml-4'
          onClick={handleChangeSearch}>
          Search
        </button>
      </div>
      <InfiniteScroll
        dataLength={ProductList?.length || 0}
        next={infiniteScroll}
        hasMore={hasMore}
        loader={<h4 className='text-center p-2'>Loading...</h4>}
        endMessage={
          <p className='text-center p-4'>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8'>
          <ProductCart cartList={ProductList || []} />
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default App
