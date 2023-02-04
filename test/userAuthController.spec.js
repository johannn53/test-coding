const login = require("../controllers/auth/loginController");
const register = require("../controllers/auth/registerController");
const user = require("../controllers/userController");

const mockRequest = (
  body = {},
  params = {},
  query = {},
  headers = {},
  session = {},
  user = {}
) => {
  return {
    body: body,
    params: params,
    query: query,
    headers: headers,
    session: session,
    user: user,
  };
};

const mockResponse = () => {
  const res = {};

  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);

  return res;
};

//GET ALL USER
describe("user controller with get all user function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await user.getAllUser(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "Success get data",
    });
  }, 2000);
});

//UPDATE USER
// describe("user controller with update user function", () => {
//   it('res.json called with{status: 200, message: "Success updating"}', async () => {
//     const req = mockRequest(
//       {
//         name: "tech",
//         email: "tes1t1231@gmail.com111",
//         password: "Us3r!",
//         rePassword: "Us3r!",
//       },
//       {
//         id: 5,
//       },
//       {},
//       {},
//       {}
//     );
//     const res = mockResponse();

//     await user.updateUser(req, res);
//     expect(res.status).toBeCalledWith(200);
//     expect(res.json).toBeCalledWith({
//       status: 200,
//       message: "success updating",
//     });
//   }, 2000);
// });

//DELETE
// describe("user controller with delete user function", () => {
//   it('res.json called with{status: 200, message: "Success delete user"}', async () => {
//     const req = mockRequest(
//       {},
//       {
//         id: 5,
//       },
//       {},
//       {},
//       {}
//     );
//     const res = mockResponse();

//     await user.deleteUser(req, res);
//     expect(res.status).toBeCalledWith(200);
//     expect(res.json).toBeCalledWith({
//       status: 200,
//       message: "Success delete user",
//     });
//   }, 2000);
// });
