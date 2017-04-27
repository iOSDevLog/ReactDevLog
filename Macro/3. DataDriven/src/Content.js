import React from 'react';

import ActivityItem from './ActivityItem';

class Content extends React.Component {
    render() {
        {/* 3.2 Content
        const { activity } = this.props; // ES6 destructuring

        return (
            <div className="content">
                <div className="line"></div>

                <div className="item">
                    <div className="avatar">
                        <img
                            alt={activity.text}
                            src={activity.user.avatar} />
                        {activity.user.name}
                    </div>

                    <span className="time">
                        {activity.timestamp}
                    </span>

                    <p>{activity.text}</p>

                    <div className="commentCount">
                        {activity.comments.length}
                    </div>
                </div>
            </div>
        */}
        const { activities } = this.props; // ES6 destructuring

        return (
            <div className="content">
                <div className="line"></div>

                {/* Timeline item */}
                {activities.map((activity) => (
                    <ActivityItem
                        activity={activity} />
                ))}

            </div>
        );
    }
}

export default Content;