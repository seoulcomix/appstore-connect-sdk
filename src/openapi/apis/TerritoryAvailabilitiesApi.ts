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
  ErrorResponse,
  TerritoryAvailabilityResponse,
  TerritoryAvailabilityUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    TerritoryAvailabilityResponseFromJSON,
    TerritoryAvailabilityResponseToJSON,
    TerritoryAvailabilityUpdateRequestFromJSON,
    TerritoryAvailabilityUpdateRequestToJSON,
} from '../models';

export interface TerritoryAvailabilitiesUpdateInstanceRequest {
    id: string;
    territoryAvailabilityUpdateRequest: TerritoryAvailabilityUpdateRequest;
}

/**
 * 
 */
export class TerritoryAvailabilitiesApi extends runtime.BaseAPI {

    /**
     */
    async territoryAvailabilitiesUpdateInstanceRaw(requestParameters: TerritoryAvailabilitiesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerritoryAvailabilityResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling territoryAvailabilitiesUpdateInstance.');
        }

        if (requestParameters.territoryAvailabilityUpdateRequest === null || requestParameters.territoryAvailabilityUpdateRequest === undefined) {
            throw new runtime.RequiredError('territoryAvailabilityUpdateRequest','Required parameter requestParameters.territoryAvailabilityUpdateRequest was null or undefined when calling territoryAvailabilitiesUpdateInstance.');
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
            path: `/v1/territoryAvailabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TerritoryAvailabilityUpdateRequestToJSON(requestParameters.territoryAvailabilityUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerritoryAvailabilityResponseFromJSON(jsonValue));
    }

    /**
     */
    async territoryAvailabilitiesUpdateInstance(requestParameters: TerritoryAvailabilitiesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerritoryAvailabilityResponse> {
        const response = await this.territoryAvailabilitiesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
