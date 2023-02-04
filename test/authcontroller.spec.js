const login = require("../controllers/auth/loginController");
const register = require("../controllers/auth/registerController");

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

describe("auth controller with Login function", () => {
  it('res.json called with{status: 200, message: "Success Login"}', async () => {
    const req = mockRequest(
      { name: "nova", password: "12345" },
      {},
      {},
      {},
      {}
    );
    const res = mockResponse();

    await login.loginUser(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "Success Login",
    });
  }, 2000);
});

// describe("auth controller with register function", () => {
//   it('res.json called with{status: 200, message: "Success Register"}', async () => {
//     const req = mockRequest(
//       {
//         name: "nova",
//         email: "test@1.com",
//         password: "Use3r!",
//         rePassword: "Use3r!",
//       },
//       {},
//       {},
//       {},
//       {}
//     );
//     const res = mockResponse();

//     await register.userRegister(req, res);
//     expect(res.status).toBeCalledWith(200);
//     expect(res.json).toBeCalledWith({
//       status: 200,
//       message: "Success Register",
//     });
//   }, 2000);
// });
