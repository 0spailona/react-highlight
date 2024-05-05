type Props = {
    title: string | null,
    views: number
}

export default function Article({title, views}: Props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
};
