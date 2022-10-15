import { IXHROptions, IXHRApi } from "./Interfaces";
import { XHRBrowser } from "./XHRBrowser";

export class XHRFactory {

	static xhrHelper: IXHRApi;
	static get XHRApi() {
		if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
			this.xhrHelper = new XHRBrowser();
		}
		return this.xhrHelper;
	}

	public static newXHRApi() {
		console.warn("depricated, import and use \"new XHRDefault(options?)\" instead")
		return new XHRBrowser();
	}
}
