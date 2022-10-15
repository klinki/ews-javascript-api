import {AutodiscoverService, WebCredentials, ExchangeService, ExchangeVersion, UserSettingName, EwsLogging, Uri}  from "../../src/js/ExchangeWebService";
import {MockXHRApi} from "../MockXHRApi";
import {MockXHRData} from "../MockXHRData";

import * as chaiAsPromised from 'chai-as-promised';
import 'chai';

chai.use(chaiAsPromised);
chai.should();
describe.skip("AutoDiscover tests", () => {
	describe("AutoDiscover settings with single user", () => {
		var autod = new AutodiscoverService(ExchangeVersion.Exchange2010_SP1);
		autod.Url = new Uri("https://fake");
		autod.Credentials = new WebCredentials("username", "password");
		var mockXhr = new MockXHRApi();
		it("GetUserSetting with single user", () => {
			mockXhr.requestXml = [MockXHRData.AutoDiscover.autodiscoverRequestWithSingleUserRequest];
			mockXhr
			mockXhr.responseXml = [MockXHRData.AutoDiscover.autodiscoverRequestWithSingleUserResponse];
			autod.XHRApi = mockXhr;
			EwsLogging.DebugLogEnabled = false;
			var promise = autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", [UserSettingName.ActiveDirectoryServer, UserSettingName.AutoDiscoverSMTPAddress, UserSettingName.CasVersion, UserSettingName.ExternalEcpPhotoUrl, UserSettingName.ExternalEwsUrl,
				UserSettingName.ExternalOABUrl, UserSettingName.MailboxDN, UserSettingName.MailboxVersion, UserSettingName.MobileMailboxPolicy, UserSettingName.RedirectUrl, UserSettingName.UserDisplayName, UserSettingName.UserDN, UserSettingName.UserMSOnline]);
			promise.should.eventually.have.deep.property("Settings[58]",'https://outlook.office365.com/EWS/Exchange.asmx');
			promise.should.eventually.have.deep.property("Settings[89]",'user@contoso.com');
		});
	});

});