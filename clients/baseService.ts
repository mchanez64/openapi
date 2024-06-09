export class BaseService {

    baseUrl;

    public constructor() {
      this.baseUrl = process.env.BASE_URL;
    }

    public async post(request, endpoint, data) {
      const url = this.baseUrl + endpoint;
      return await request.post(url, { data: data });
    }
}