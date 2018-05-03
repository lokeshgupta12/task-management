import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { CommonService } from '../service/common.service';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {

	constructor(private commonService : CommonService){}
	
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// Clone the request to add the new header.
		const authReq = req.clone({ setHeaders: { 
		    'x-access-token' : this.commonService.getAuthToken()
		    } 
		});
		//send the newly created request
		return next.handle(authReq);
	  }
}