import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";

//local components
import ContentPaths from './ContentPaths';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Switch>
                    {ContentPaths.map(({path, ContentComponent, exact}, i) => (
                        <Route 
                            path={path}
                            exact={exact}
                            render={(routeProps) => (
                                <ContentComponent {...routeProps} {...this.props} />
                            )}
                            key={i} 
                        />
                    ))}
                </Switch>
            </div>
        );
    }
}