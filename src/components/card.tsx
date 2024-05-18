const Card =({children}:{children: React.ReactNode}) => {
    const cardStyle = {
        padding: "20px",
        margin: "20px",
        backgroundColor: "lightgrey"
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );}
    export default Card;