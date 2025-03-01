/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BetaTesterInvitationCreateRequest,
  BetaTesterInvitationResponse,
  ErrorResponse,
} from '../models';
import {
    BetaTesterInvitationCreateRequestFromJSON,
    BetaTesterInvitationCreateRequestToJSON,
    BetaTesterInvitationResponseFromJSON,
    BetaTesterInvitationResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BetaTesterInvitationsCreateInstanceRequest {
    betaTesterInvitationCreateRequest: BetaTesterInvitationCreateRequest;
}

/**
 * 
 */
export class BetaTesterInvitationsApi extends runtime.BaseAPI {

    /**
     */
    async betaTesterInvitationsCreateInstanceRaw(requestParameters: BetaTesterInvitationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaTesterInvitationResponse>> {
        if (requestParameters.betaTesterInvitationCreateRequest === null || requestParameters.betaTesterInvitationCreateRequest === undefined) {
            throw new runtime.RequiredError('betaTesterInvitationCreateRequest','Required parameter requestParameters.betaTesterInvitationCreateRequest was null or undefined when calling betaTesterInvitationsCreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/betaTesterInvitations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BetaTesterInvitationCreateRequestToJSON(requestParameters.betaTesterInvitationCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaTesterInvitationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaTesterInvitationsCreateInstance(requestParameters: BetaTesterInvitationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaTesterInvitationResponse> {
        const response = await this.betaTesterInvitationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
