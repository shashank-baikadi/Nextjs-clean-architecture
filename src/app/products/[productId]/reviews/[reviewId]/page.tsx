import {notFound} from "next/navigation";
import { parse } from "path";

export default function ProductReview({params}:
    {params:{productId:string,reviewId:string}}
) {
if(parseInt (params.reviewId) > 5) {
    return notFound();
}
    return (
        <div>
        <h1>Review {params.reviewId} for the product {params.productId}</h1>
        </div>
    );
    }