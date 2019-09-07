import React from 'react';
import axios from 'axios';


export default class Ebook extends React.Component {
    state = {
        apps: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww2.yggtorrent.ch%2Frss%3Faction%3Dgenerate%26type%3Dcat%26id%3D2140%26passkey%3DmLm89bjTh7BClIjiALwYuE0RvKVsCGNP&api_key=cpe1hekkfknhpeqov1hvcojojd9csg01yqybwsaw&count=100`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
            .then(res => {
                console.log(res.data.items)
                const apps = res.data.items;
                this.setState({ apps })
            })
    }

    render() {
        return (
            <div className="ui stackable four column grid container">
                {this.state.apps.map(OTHER =>
                    <div className="column">
                        <div className="ui card ui raised piled segments">
                            <div className="content">
                                <div className="header">{OTHER.title}</div>
                                <div className="meta">
                                    <div className="ui brown ribbon label">
                                        <a className="color white"><i className="book icon"></i> {OTHER.categories[0]}</a>
                                    </div>
                                </div>
                                <div className="description" dangerouslySetInnerHTML={{ __html: OTHER.content }} />
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <a className="ui brown button" href={OTHER.enclosure.link} target="_blank" rel="noopener noreferrer">Télécharger</a>
                                    <a className="ui basic brown button" href={OTHER.link} target="_blank" rel="noopener noreferrer">Voir le post</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                }
            </div>
        )
    }
}




