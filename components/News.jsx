import React from 'react';
import axios from 'axios';


export default class News extends React.Component {
    state = {
        apps: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.exploit-db.com%2Frss.xml&api_key=8ebdwuwxtgyt3fqwkgirecycthxjgrk4mnjlmg9h&count=100`,
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
                                    <div className="ui orange ribbon label">
                                        <a className="color white"><i className="bug icon"></i> Exploit DB</a>
                                    </div>
                                </div>
                                <div className="description" dangerouslySetInnerHTML={{ __html: OTHER.content }} />
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <a className="ui orange button" href={OTHER.enclosure.link} target="_blank" rel="noopener noreferrer">Télécharger</a>
                                    <a className="ui basic orange button" href={OTHER.link} target="_blank" rel="noopener noreferrer">Voir le post</a>
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







