import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:8888/login/oauth2/code/kakao", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        codeMsg: "SUCCESS",
        data: {
          name: "test",
        },
      })
    );
  }),
];
