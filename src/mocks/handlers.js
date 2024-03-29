import { rest } from 'msw';
const baseURL = 'https://mewmes-dc42376a8874.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 7,
                username: "Banana",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 7,
                profile_image: "https://res.cloudinary.com/ilabura/image/upload/v1/media/images/images_ylz9wm"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];