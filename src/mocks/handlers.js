import { rest } from "msw";

export const handlers = [
  rest.put("/get/bucket", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        codeMsg: "SUCCESS",
        data: [
          {
            bucketId: 3,
            contents: "ASfdsad",
            userId: 0,
            type: "BT001",
            registDate: "2022-11-22T15:44:55",
          },
          {
            bucketId: 4,
            contents: "ASfdsad",
            userId: 0,
            type: "BT001",
            registDate: "2022-11-22T15:44:55",
          },
        ],
      })
    );
  }),
];
