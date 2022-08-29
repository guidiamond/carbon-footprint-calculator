import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export const env = {
  PORT: process.env.PORT || 3000,
};
