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
  SubscriptionAppStoreReviewScreenshotCreateRequest,
  SubscriptionAppStoreReviewScreenshotResponse,
  SubscriptionAppStoreReviewScreenshotUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestToJSON,
    SubscriptionAppStoreReviewScreenshotResponseFromJSON,
    SubscriptionAppStoreReviewScreenshotResponseToJSON,
    SubscriptionAppStoreReviewScreenshotUpdateRequestFromJSON,
    SubscriptionAppStoreReviewScreenshotUpdateRequestToJSON,
} from '../models';

export interface SubscriptionAppStoreReviewScreenshotsCreateInstanceRequest {
    subscriptionAppStoreReviewScreenshotCreateRequest: SubscriptionAppStoreReviewScreenshotCreateRequest;
}

export interface SubscriptionAppStoreReviewScreenshotsDeleteInstanceRequest {
    id: string;
}

export interface SubscriptionAppStoreReviewScreenshotsGetInstanceRequest {
    id: string;
    fieldsSubscriptionAppStoreReviewScreenshots?: Array<SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum>;
    include?: Array<SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum>;
}

export interface SubscriptionAppStoreReviewScreenshotsUpdateInstanceRequest {
    id: string;
    subscriptionAppStoreReviewScreenshotUpdateRequest: SubscriptionAppStoreReviewScreenshotUpdateRequest;
}

/**
 * 
 */
export class SubscriptionAppStoreReviewScreenshotsApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters: SubscriptionAppStoreReviewScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAppStoreReviewScreenshotResponse>> {
        if (requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest === null || requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionAppStoreReviewScreenshotCreateRequest','Required parameter requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest was null or undefined when calling subscriptionAppStoreReviewScreenshotsCreateInstance.');
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
            path: `/v1/subscriptionAppStoreReviewScreenshots`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionAppStoreReviewScreenshotCreateRequestToJSON(requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsCreateInstance(requestParameters: SubscriptionAppStoreReviewScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAppStoreReviewScreenshotResponse> {
        const response = await this.subscriptionAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters: SubscriptionAppStoreReviewScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsDeleteInstance.');
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
            path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsDeleteInstance(requestParameters: SubscriptionAppStoreReviewScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsGetInstanceRaw(requestParameters: SubscriptionAppStoreReviewScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAppStoreReviewScreenshotResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionAppStoreReviewScreenshots) {
            queryParameters['fields[subscriptionAppStoreReviewScreenshots]'] = requestParameters.fieldsSubscriptionAppStoreReviewScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsGetInstance(requestParameters: SubscriptionAppStoreReviewScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAppStoreReviewScreenshotResponse> {
        const response = await this.subscriptionAppStoreReviewScreenshotsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters: SubscriptionAppStoreReviewScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAppStoreReviewScreenshotResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsUpdateInstance.');
        }

        if (requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest === null || requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionAppStoreReviewScreenshotUpdateRequest','Required parameter requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest was null or undefined when calling subscriptionAppStoreReviewScreenshotsUpdateInstance.');
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
            path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionAppStoreReviewScreenshotUpdateRequestToJSON(requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionAppStoreReviewScreenshotsUpdateInstance(requestParameters: SubscriptionAppStoreReviewScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAppStoreReviewScreenshotResponse> {
        const response = await this.subscriptionAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    Subscription: 'subscription'
} as const;
export type SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum = typeof SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum[keyof typeof SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum];
/**
 * @export
 */
export const SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum = {
    Subscription: 'subscription'
} as const;
export type SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum = typeof SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum[keyof typeof SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum];
