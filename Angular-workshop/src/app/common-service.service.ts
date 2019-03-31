import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private port = '3001';
  private rootPath = 'http://localhost:'+this.port;
  private getDataPath = this.rootPath+'/test/getData';

  paramiter:any = {
    params:{},
    responseType:"json"
  }
  
  constructor(private http: TransferHttpService,) {
      
  }

  getData(param){
    this.paramiter.params = param;
    return this.http.get(this.getDataPath,this.paramiter);
  }

  postData(body){
    this.paramiter.params = body;
    return this.http.post(this.getDataPath,body);
  }
}
