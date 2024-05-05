import Video from "./video.tsx";
import Article from "./article.tsx";
import Popular from "./popular";
import New from "./new";


type Props = {
    list: Array<{
        type: string,
        title?: string,
        views: number,
        url?: string
    }>
}

export default function List({list}: Props) {
    return list.map(item => {
        switch (item.type) {
            case 'video':
                if (item.views > 1000) {
                    return (
                        <Popular>
                            <Video url={item.url || null} views={item.views}/>
                        </Popular>
                    );
                }
                if (item.views < 100) {
                    return (
                        <New>
                            <Video url={item.url || null} views={item.views}/>
                        </New>
                    )
                }
                return (
                    <Video url={item.url || null} views={item.views}/>
                )

            case 'article':
                if (item.views > 1000) {
                    return (
                        <Popular>
                            <Article title={item.url || null} views={item.views}/>
                        </Popular>
                    );
                }
                if (item.views < 100) {
                    return (
                        <New>
                            <Article title={item.url || null} views={item.views}/>
                        </New>
                    )
                }
                return (
                    <Article title={item.url || null} views={item.views}/>
                );
        }
    });
};
