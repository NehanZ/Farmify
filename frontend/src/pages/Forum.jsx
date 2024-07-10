import React from "react";

const Forum = () => {
  return (
    <div>
      <section className="forum">
        <div className="forum-header">
          <h2>Forum</h2>
        </div>
        <div className="forum-list">
          {[
            {
              question: "How to plant coconut trees in wet areas?",
              replies: 9,
              views: 36,
              time: "8 hours ago",
              user: "Farmer_1",
            },
            {
              question:
                "Is there any ways to plant strawberries in dry areas like Kurunegala",
              replies: 6,
              views: 50,
              time: "16 hours ago",
              user: "Farmer_2",
            },
            {
              question:
                "What do you do if your beetle plantation is filled with spores",
              replies: 21,
              views: 128,
              time: "1 day ago",
              user: "Farmer_3",
            },
            {
              question:
                "Is there any ways to control insects without using pesticides for paddy",
              replies: 15,
              views: 104,
              time: "4 days ago",
              user: "Farmer_4",
            },
            {
              question:
                "Is there any ways to control insects without using pesticides for paddy",
              replies: 15,
              views: 104,
              time: "4 days ago",
              user: "Farmer_4",
            },
            {
              question:
                "Is there any ways to control insects without using pesticides for paddy",
              replies: 15,
              views: 104,
              time: "4 days ago",
              user: "Farmer_4",
            },
            {
              question:
                "Is there any ways to control insects without using pesticides for paddy",
              replies: 15,
              views: 104,
              time: "4 days ago",
              user: "Farmer_4",
            },
            {
              question:
                "Is there any ways to control insects without using pesticides for paddy",
              replies: 15,
              views: 104,
              time: "4 days ago",
              user: "Farmer_4",
            },
          ].map((post, index) => (
            <div className="forum-post" key={index}>
              <div className="forum-details">
                <p>
                  <strong>{post.question}</strong>
                </p>
                <p>
                  By {post.user}, <small>{post.time}</small>
                </p>
              </div>
              <div className="forum-stats">
                <p>
                  <span>{post.replies} Replies</span>
                  <span>{post.views} Views</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Forum;
