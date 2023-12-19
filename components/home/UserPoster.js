import React, { useState, useEffect, useRef } from "react";
import PosterImage from "./PosterImageBox";
import PosterDetail from "./PosterDetail";
import styles from "./UserPoster.module.css";
import Link from "next/link";

const UserPoster = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/getPosts?page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        console.log(data);
        setPosts((prevPosts) => [...prevPosts, ...data]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    function handleObserver(entities) {
      const target = entities[0];
      if (target.isIntersecting) {
        setCurrentPage((prev) => prev + 1); // 다음 페이지로 업데이트
      }
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className={styles.Container} key={post._id}>
          <Link href={`/detail/${post._id}`}>
            <PosterImage location={post.location.name} imgSrc={post.imagePaths} />
            <PosterDetail schedule={post.dateSelectData} userInfo={post.genderAgeSelectData} />
          </Link>
        </div>
      ))}
      <div ref={loader} /> {/* 로딩 지점 */}
    </>
  );
};

export default UserPoster;
