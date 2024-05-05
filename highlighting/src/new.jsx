export default function New(Component) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {Component.children}
        </div>
    );
};