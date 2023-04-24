import Image from 'next/image';
import { useCart } from '~/components/cart/ShoppingCart';
import { api } from '~/utils/api';

const ProductsCardScroll: React.FC = () => {
  const { addToCart } = useCart();

  const { data: productsData, isFetched } =
    api.product.getAll.useQuery();

  return (
    <div className="flex flex-wrap items-center justify-around">

      {!isFetched || true &&
        Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="card card-compact w-[45%] rounded-xl overflow-hidden glass mt-12">
              <div className="pb-[100%] w-full  animate-pulse bg-current opacity-25">

              </div>
              <div className="card-body">
                <h2 className="w-2/3 h-4 rounded-lg animate-pulse bg-current opacity-25"></h2>
                <h2 className="w-1/2 h-4 rounded-lg animate-pulse bg-current opacity-25"></h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      width={24}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
      }
      {productsData?.map((product) => (
        <div
          key={product.id}
          className="card card-compact w-[45%] glass mt-12"
        >
          <figure className="relative overflow-hidden pb-[100%] w-full">
            <Image
              src={product.imageName}
              blurDataURL={product.imageBlurDataURL}
              alt={product.name}
              placeholder="blur"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 60vw,
                      (max-width: 1200px) 40vw,
                      33vw"
              quality={60}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    imageURL: product.imageUrl,
                    blurImageUrl: product.imageBlurDataURL,
                    productStock: product.stock,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCardScroll;
