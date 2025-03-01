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
  AppClipHeaderImageCreateRequest,
  AppClipHeaderImageResponse,
  AppClipHeaderImageUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppClipHeaderImageCreateRequestFromJSON,
    AppClipHeaderImageCreateRequestToJSON,
    AppClipHeaderImageResponseFromJSON,
    AppClipHeaderImageResponseToJSON,
    AppClipHeaderImageUpdateRequestFromJSON,
    AppClipHeaderImageUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppClipHeaderImagesCreateInstanceRequest {
    appClipHeaderImageCreateRequest: AppClipHeaderImageCreateRequest;
}

export interface AppClipHeaderImagesDeleteInstanceRequest {
    id: string;
}

export interface AppClipHeaderImagesGetInstanceRequest {
    id: string;
    fieldsAppClipHeaderImages?: Array<AppClipHeaderImagesGetInstanceFieldsAppClipHeaderImagesEnum>;
    include?: Array<AppClipHeaderImagesGetInstanceIncludeEnum>;
}

export interface AppClipHeaderImagesUpdateInstanceRequest {
    id: string;
    appClipHeaderImageUpdateRequest: AppClipHeaderImageUpdateRequest;
}

/**
 * 
 */
export class AppClipHeaderImagesApi extends runtime.BaseAPI {

    /**
     */
    async appClipHeaderImagesCreateInstanceRaw(requestParameters: AppClipHeaderImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipHeaderImageResponse>> {
        if (requestParameters.appClipHeaderImageCreateRequest === null || requestParameters.appClipHeaderImageCreateRequest === undefined) {
            throw new runtime.RequiredError('appClipHeaderImageCreateRequest','Required parameter requestParameters.appClipHeaderImageCreateRequest was null or undefined when calling appClipHeaderImagesCreateInstance.');
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
            path: `/v1/appClipHeaderImages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipHeaderImageCreateRequestToJSON(requestParameters.appClipHeaderImageCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipHeaderImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipHeaderImagesCreateInstance(requestParameters: AppClipHeaderImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipHeaderImageResponse> {
        const response = await this.appClipHeaderImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipHeaderImagesDeleteInstanceRaw(requestParameters: AppClipHeaderImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipHeaderImagesDeleteInstance.');
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
            path: `/v1/appClipHeaderImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appClipHeaderImagesDeleteInstance(requestParameters: AppClipHeaderImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appClipHeaderImagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appClipHeaderImagesGetInstanceRaw(requestParameters: AppClipHeaderImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipHeaderImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipHeaderImagesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipHeaderImages) {
            queryParameters['fields[appClipHeaderImages]'] = requestParameters.fieldsAppClipHeaderImages.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appClipHeaderImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipHeaderImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipHeaderImagesGetInstance(requestParameters: AppClipHeaderImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipHeaderImageResponse> {
        const response = await this.appClipHeaderImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipHeaderImagesUpdateInstanceRaw(requestParameters: AppClipHeaderImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipHeaderImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipHeaderImagesUpdateInstance.');
        }

        if (requestParameters.appClipHeaderImageUpdateRequest === null || requestParameters.appClipHeaderImageUpdateRequest === undefined) {
            throw new runtime.RequiredError('appClipHeaderImageUpdateRequest','Required parameter requestParameters.appClipHeaderImageUpdateRequest was null or undefined when calling appClipHeaderImagesUpdateInstance.');
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
            path: `/v1/appClipHeaderImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipHeaderImageUpdateRequestToJSON(requestParameters.appClipHeaderImageUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipHeaderImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipHeaderImagesUpdateInstance(requestParameters: AppClipHeaderImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipHeaderImageResponse> {
        const response = await this.appClipHeaderImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipHeaderImagesGetInstanceFieldsAppClipHeaderImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppClipDefaultExperienceLocalization: 'appClipDefaultExperienceLocalization'
} as const;
export type AppClipHeaderImagesGetInstanceFieldsAppClipHeaderImagesEnum = typeof AppClipHeaderImagesGetInstanceFieldsAppClipHeaderImagesEnum[keyof typeof AppClipHeaderImagesGetInstanceFieldsAppClipHeaderImagesEnum];
/**
 * @export
 */
export const AppClipHeaderImagesGetInstanceIncludeEnum = {
    AppClipDefaultExperienceLocalization: 'appClipDefaultExperienceLocalization'
} as const;
export type AppClipHeaderImagesGetInstanceIncludeEnum = typeof AppClipHeaderImagesGetInstanceIncludeEnum[keyof typeof AppClipHeaderImagesGetInstanceIncludeEnum];
