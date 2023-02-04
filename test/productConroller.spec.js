const product = require("../controllers/product/productController");
const stock = require("../controllers/product/stockController");

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

describe("product controller with get all product function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await product.getAllProduct(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});

describe("product controller with get all product function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await product.getAllProduct(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});

describe("stock controller with get all stock function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await stock.getStock(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});
