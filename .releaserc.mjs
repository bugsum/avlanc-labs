/**
 * @type {import('semantic-release').GlobalConfig}
 */
const ReleaseConfig = {
  branches: ["main"], // only release from main
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/git", { assets: ["CHANGELOG.md", "package.json"] }],
    "@semantic-release/github",
  ],
};

export default ReleaseConfig;
