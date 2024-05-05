type Props = {
    url: string | null,
    views: number
}

export default function Video({url, views}: Props) {
    if (!url) return
    return (
        <div className="item item-video">
            <iframe src={url} style={{border: "none"}} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    )
};