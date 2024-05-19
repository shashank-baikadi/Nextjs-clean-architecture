export default function Layout({children,users,revenue,notifications}: {children: React.ReactNode; users: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode}) {
    return (
        <div>
            <h1>Complex Dashboard</h1>
            {children}
            <div style = {{display: "flex"}}>
                <div style ={{display: "flex", flexDirection: "column", flex: 1}}>
            <div>{users}</div>
            <div>{revenue}</div>
            </div>
            <div style ={{display :"flex",flex:'1'}} className="bg-red-200">{notifications}</div>
        </div>
        </div>
    );
}