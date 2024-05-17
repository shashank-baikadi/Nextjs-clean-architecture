export default function ProductReview({params}:
    {params:{productId:string,reviewId:string}}
) {
    return (
        <div>
        <h1>Review {params.reviewId} for the product {params.productId}</h1>
        </div>
    );
    }