import { rest } from "msw";

export const handlers = [
  rest.put("/user/name", (req, res, ctx) => {
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
