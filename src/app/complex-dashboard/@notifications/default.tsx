import Card from "@/components/card";
import Link from "next/link";

export default function DefaultNotifications(){
    return (
        <div>
        <Card>Notifications
     <Link href="/complex-dashboard/achived"> Archived</Link>
        </Card>
     
        </div>
    );
}