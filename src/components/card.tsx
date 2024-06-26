const Card =({children}:{children: React.ReactNode}) => {
    const cardStyle = {
        padding: "20px",
        margin: "50px",
        backgroundColor: "lightgrey"
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );}
    export default Card;