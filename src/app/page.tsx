import React from "react";
import fs from "fs";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

const CONTENT_DIRECTORY = "content";

function Home() {
  const contentDirectory = `${process.cwd()}/${CONTENT_DIRECTORY}`;
  const blogPostsFiles = fs.readdirSync(contentDirectory);

  console.log(blogPostsFiles);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
    </div>
  );
}

export default Home;
