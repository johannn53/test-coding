const product = require("../controllers/product/productController");
const stock = require("../controllers/product/stockController");
const kategories = require("../controllers/product/kategoriesController");

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

//PRODUCT CONTROLLER
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

describe("product controller with get all product price ascending function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await product.getAllProdAsc(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});

// STOCK CONTROLLER
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

// KATEGORIES CONTROLLER
describe("kategories controller with get all kategories function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await kategories.getKategori(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});

describe("kategories controller with get kategories by ID function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest(
      {},
      {
        id: 1,
      },
      {},
      {},
      {}
    );
    const res = mockResponse();

    await kategories.kategoriById(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: `success get kategori with id 1`,
    });
  }, 2000);
});

describe("kategories controller with get kategories by name function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest(
      {},
      {},
      {
        name: "ip",
      },
      {},
      {}
    );
    const res = mockResponse();

    await kategories.kategoriByName(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});

describe("kategories controller with get all product in detail function", () => {
  it('res.json called with{status: 200, message: "Success get data"}', async () => {
    const req = mockRequest({}, {}, {}, {}, {});
    const res = mockResponse();

    await kategories.allProdInfo(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: 200,
      message: "success get data",
    });
  }, 2000);
});
