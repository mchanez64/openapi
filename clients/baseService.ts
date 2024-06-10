export class BaseService {

    baseUrl;

    public constructor() {
      this.baseUrl = process.env.BASE_URL;
    }

    public async post(request, endpoint, data) {
      const url = this.baseUrl + endpoint;
      return await request.post(url, { data: data });
    }

    public async get(request, endpoint) {
      const url = this.baseUrl + endpoint;
      return await request.get(url);
    }
    
    public async put(request, endpoint, data) {
      const url = this.baseUrl + endpoint;
      return await request.put(url, { data: data });
    }

    public async delete(request, endpoint) {
      const url = this.baseUrl + endpoint;
      return await request.delete(url);
    }
}