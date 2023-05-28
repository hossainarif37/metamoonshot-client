const Button = ({ children }) => {
    return (
        <button className="btn btn-primary border-none bg-gradient-to-br from-primary to-secondary px-12 capitalize">{children}</button>
    );
};

export default Button;