import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" href="https://mxd8520.uta.cloud/blogs/">
              Forum
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link href="https://mxd8520.uta.cloud/blogs/" className="link">
            Resident Review
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lunamar is a best place to live. I am very happy with the services they offer.
      </p>
    </div>
  );
}
