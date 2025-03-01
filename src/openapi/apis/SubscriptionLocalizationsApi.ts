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
  SubscriptionLocalizationCreateRequest,
  SubscriptionLocalizationResponse,
  SubscriptionLocalizationUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionLocalizationCreateRequestFromJSON,
    SubscriptionLocalizationCreateRequestToJSON,
    SubscriptionLocalizationResponseFromJSON,
    SubscriptionLocalizationResponseToJSON,
    SubscriptionLocalizationUpdateRequestFromJSON,
    SubscriptionLocalizationUpdateRequestToJSON,
} from '../models';

export interface SubscriptionLocalizationsCreateInstanceRequest {
    subscriptionLocalizationCreateRequest: SubscriptionLocalizationCreateRequest;
}

export interface SubscriptionLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface SubscriptionLocalizationsGetInstanceRequest {
    id: string;
    fieldsSubscriptionLocalizations?: Array<SubscriptionLocalizationsGetInstanceFieldsSubscriptionLocalizationsEnum>;
    include?: Array<SubscriptionLocalizationsGetInstanceIncludeEnum>;
}

export interface SubscriptionLocalizationsUpdateInstanceRequest {
    id: string;
    subscriptionLocalizationUpdateRequest: SubscriptionLocalizationUpdateRequest;
}

/**
 * 
 */
export class SubscriptionLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionLocalizationsCreateInstanceRaw(requestParameters: SubscriptionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLocalizationResponse>> {
        if (requestParameters.subscriptionLocalizationCreateRequest === null || requestParameters.subscriptionLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionLocalizationCreateRequest','Required parameter requestParameters.subscriptionLocalizationCreateRequest was null or undefined when calling subscriptionLocalizationsCreateInstance.');
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
            path: `/v1/subscriptionLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionLocalizationCreateRequestToJSON(requestParameters.subscriptionLocalizationCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionLocalizationsCreateInstance(requestParameters: SubscriptionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLocalizationResponse> {
        const response = await this.subscriptionLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionLocalizationsDeleteInstanceRaw(requestParameters: SubscriptionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionLocalizationsDeleteInstance.');
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
            path: `/v1/subscriptionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async subscriptionLocalizationsDeleteInstance(requestParameters: SubscriptionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionLocalizationsGetInstanceRaw(requestParameters: SubscriptionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionLocalizationsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionLocalizations) {
            queryParameters['fields[subscriptionLocalizations]'] = requestParameters.fieldsSubscriptionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionLocalizationsGetInstance(requestParameters: SubscriptionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLocalizationResponse> {
        const response = await this.subscriptionLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionLocalizationsUpdateInstanceRaw(requestParameters: SubscriptionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionLocalizationsUpdateInstance.');
        }

        if (requestParameters.subscriptionLocalizationUpdateRequest === null || requestParameters.subscriptionLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionLocalizationUpdateRequest','Required parameter requestParameters.subscriptionLocalizationUpdateRequest was null or undefined when calling subscriptionLocalizationsUpdateInstance.');
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
            path: `/v1/subscriptionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionLocalizationUpdateRequestToJSON(requestParameters.subscriptionLocalizationUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionLocalizationsUpdateInstance(requestParameters: SubscriptionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLocalizationResponse> {
        const response = await this.subscriptionLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionLocalizationsGetInstanceFieldsSubscriptionLocalizationsEnum = {
    Name: 'name',
    Locale: 'locale',
    Description: 'description',
    State: 'state',
    Subscription: 'subscription'
} as const;
export type SubscriptionLocalizationsGetInstanceFieldsSubscriptionLocalizationsEnum = typeof SubscriptionLocalizationsGetInstanceFieldsSubscriptionLocalizationsEnum[keyof typeof SubscriptionLocalizationsGetInstanceFieldsSubscriptionLocalizationsEnum];
/**
 * @export
 */
export const SubscriptionLocalizationsGetInstanceIncludeEnum = {
    Subscription: 'subscription'
} as const;
export type SubscriptionLocalizationsGetInstanceIncludeEnum = typeof SubscriptionLocalizationsGetInstanceIncludeEnum[keyof typeof SubscriptionLocalizationsGetInstanceIncludeEnum];
