'use strict';
const axios = require('axios');
const Service = require('../src/service');

jest.mock('axios');

describe('test all services', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('test list data', async () => {
    const responseData = {
      data: {
        field : "there is data "
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(responseData));

    const response = await Service.list();
    expect(response).toEqual(responseData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

    test('test list data', async () => {
    const responseData = {
      data: {
        field : "champs qui prèsente dans les champs"
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(responseData));

    const response = await Service.list();
    expect(response).toEqual(responseData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });


    test("test one POST", async () => {
      const responseData = {
        data: {
          title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
      };


      axios.get.mockImplementationOnce(() => Promise.resolve(responseData));

      const response = await Service.list();

      expect(response.title).toMatch("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(axios.get).toHaveBeenCalledTimes(1);
    });



  
});
