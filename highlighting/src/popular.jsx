export default function Popular(Component) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {Component.children}
        </div>
    );
};
