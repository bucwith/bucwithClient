import { rest } from 'msw'

// [Get] fruits 서버 요청 시 [ '사과', '바나나' ]를 응답한다.
export const handlers = [
    rest.get( '/fruits', (req, res, ctx) => {
        return res(ctx.status(200),ctx.json([ '사과', '바나나' ]))
    })

]