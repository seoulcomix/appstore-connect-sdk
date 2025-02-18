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
  BetaAppClipInvocationCreateRequest,
  BetaAppClipInvocationResponse,
  BetaAppClipInvocationUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    BetaAppClipInvocationCreateRequestFromJSON,
    BetaAppClipInvocationCreateRequestToJSON,
    BetaAppClipInvocationResponseFromJSON,
    BetaAppClipInvocationResponseToJSON,
    BetaAppClipInvocationUpdateRequestFromJSON,
    BetaAppClipInvocationUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BetaAppClipInvocationsCreateInstanceRequest {
    betaAppClipInvocationCreateRequest: BetaAppClipInvocationCreateRequest;
}

export interface BetaAppClipInvocationsDeleteInstanceRequest {
    id: string;
}

export interface BetaAppClipInvocationsGetInstanceRequest {
    id: string;
    fieldsBetaAppClipInvocations?: Array<BetaAppClipInvocationsGetInstanceFieldsBetaAppClipInvocationsEnum>;
    include?: Array<BetaAppClipInvocationsGetInstanceIncludeEnum>;
    limitBetaAppClipInvocationLocalizations?: number;
}

export interface BetaAppClipInvocationsUpdateInstanceRequest {
    id: string;
    betaAppClipInvocationUpdateRequest: BetaAppClipInvocationUpdateRequest;
}

/**
 * 
 */
export class BetaAppClipInvocationsApi extends runtime.BaseAPI {

    /**
     */
    async betaAppClipInvocationsCreateInstanceRaw(requestParameters: BetaAppClipInvocationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppClipInvocationResponse>> {
        if (requestParameters.betaAppClipInvocationCreateRequest === null || requestParameters.betaAppClipInvocationCreateRequest === undefined) {
            throw new runtime.RequiredError('betaAppClipInvocationCreateRequest','Required parameter requestParameters.betaAppClipInvocationCreateRequest was null or undefined when calling betaAppClipInvocationsCreateInstance.');
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
            path: `/v1/betaAppClipInvocations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppClipInvocationCreateRequestToJSON(requestParameters.betaAppClipInvocationCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppClipInvocationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppClipInvocationsCreateInstance(requestParameters: BetaAppClipInvocationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppClipInvocationResponse> {
        const response = await this.betaAppClipInvocationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppClipInvocationsDeleteInstanceRaw(requestParameters: BetaAppClipInvocationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppClipInvocationsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/betaAppClipInvocations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async betaAppClipInvocationsDeleteInstance(requestParameters: BetaAppClipInvocationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.betaAppClipInvocationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async betaAppClipInvocationsGetInstanceRaw(requestParameters: BetaAppClipInvocationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppClipInvocationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppClipInvocationsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBetaAppClipInvocations) {
            queryParameters['fields[betaAppClipInvocations]'] = requestParameters.fieldsBetaAppClipInvocations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBetaAppClipInvocationLocalizations !== undefined) {
            queryParameters['limit[betaAppClipInvocationLocalizations]'] = requestParameters.limitBetaAppClipInvocationLocalizations;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/betaAppClipInvocations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppClipInvocationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppClipInvocationsGetInstance(requestParameters: BetaAppClipInvocationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppClipInvocationResponse> {
        const response = await this.betaAppClipInvocationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppClipInvocationsUpdateInstanceRaw(requestParameters: BetaAppClipInvocationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppClipInvocationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaAppClipInvocationsUpdateInstance.');
        }

        if (requestParameters.betaAppClipInvocationUpdateRequest === null || requestParameters.betaAppClipInvocationUpdateRequest === undefined) {
            throw new runtime.RequiredError('betaAppClipInvocationUpdateRequest','Required parameter requestParameters.betaAppClipInvocationUpdateRequest was null or undefined when calling betaAppClipInvocationsUpdateInstance.');
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
            path: `/v1/betaAppClipInvocations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppClipInvocationUpdateRequestToJSON(requestParameters.betaAppClipInvocationUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppClipInvocationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppClipInvocationsUpdateInstance(requestParameters: BetaAppClipInvocationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppClipInvocationResponse> {
        const response = await this.betaAppClipInvocationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BetaAppClipInvocationsGetInstanceFieldsBetaAppClipInvocationsEnum = {
    Url: 'url',
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationsGetInstanceFieldsBetaAppClipInvocationsEnum = typeof BetaAppClipInvocationsGetInstanceFieldsBetaAppClipInvocationsEnum[keyof typeof BetaAppClipInvocationsGetInstanceFieldsBetaAppClipInvocationsEnum];
/**
 * @export
 */
export const BetaAppClipInvocationsGetInstanceIncludeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationsGetInstanceIncludeEnum = typeof BetaAppClipInvocationsGetInstanceIncludeEnum[keyof typeof BetaAppClipInvocationsGetInstanceIncludeEnum];
