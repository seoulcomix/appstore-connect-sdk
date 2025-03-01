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
  AppEventVideoClipCreateRequest,
  AppEventVideoClipResponse,
  AppEventVideoClipUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppEventVideoClipCreateRequestFromJSON,
    AppEventVideoClipCreateRequestToJSON,
    AppEventVideoClipResponseFromJSON,
    AppEventVideoClipResponseToJSON,
    AppEventVideoClipUpdateRequestFromJSON,
    AppEventVideoClipUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppEventVideoClipsCreateInstanceRequest {
    appEventVideoClipCreateRequest: AppEventVideoClipCreateRequest;
}

export interface AppEventVideoClipsDeleteInstanceRequest {
    id: string;
}

export interface AppEventVideoClipsGetInstanceRequest {
    id: string;
    fieldsAppEventVideoClips?: Array<AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum>;
    include?: Array<AppEventVideoClipsGetInstanceIncludeEnum>;
}

export interface AppEventVideoClipsUpdateInstanceRequest {
    id: string;
    appEventVideoClipUpdateRequest: AppEventVideoClipUpdateRequest;
}

/**
 * 
 */
export class AppEventVideoClipsApi extends runtime.BaseAPI {

    /**
     */
    async appEventVideoClipsCreateInstanceRaw(requestParameters: AppEventVideoClipsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>> {
        if (requestParameters.appEventVideoClipCreateRequest === null || requestParameters.appEventVideoClipCreateRequest === undefined) {
            throw new runtime.RequiredError('appEventVideoClipCreateRequest','Required parameter requestParameters.appEventVideoClipCreateRequest was null or undefined when calling appEventVideoClipsCreateInstance.');
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
            path: `/v1/appEventVideoClips`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventVideoClipCreateRequestToJSON(requestParameters.appEventVideoClipCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventVideoClipResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventVideoClipsCreateInstance(requestParameters: AppEventVideoClipsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse> {
        const response = await this.appEventVideoClipsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventVideoClipsDeleteInstanceRaw(requestParameters: AppEventVideoClipsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventVideoClipsDeleteInstance.');
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
            path: `/v1/appEventVideoClips/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appEventVideoClipsDeleteInstance(requestParameters: AppEventVideoClipsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appEventVideoClipsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appEventVideoClipsGetInstanceRaw(requestParameters: AppEventVideoClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventVideoClipsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppEventVideoClips) {
            queryParameters['fields[appEventVideoClips]'] = requestParameters.fieldsAppEventVideoClips.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appEventVideoClips/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventVideoClipResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventVideoClipsGetInstance(requestParameters: AppEventVideoClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse> {
        const response = await this.appEventVideoClipsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventVideoClipsUpdateInstanceRaw(requestParameters: AppEventVideoClipsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventVideoClipsUpdateInstance.');
        }

        if (requestParameters.appEventVideoClipUpdateRequest === null || requestParameters.appEventVideoClipUpdateRequest === undefined) {
            throw new runtime.RequiredError('appEventVideoClipUpdateRequest','Required parameter requestParameters.appEventVideoClipUpdateRequest was null or undefined when calling appEventVideoClipsUpdateInstance.');
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
            path: `/v1/appEventVideoClips/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventVideoClipUpdateRequestToJSON(requestParameters.appEventVideoClipUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventVideoClipResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventVideoClipsUpdateInstance(requestParameters: AppEventVideoClipsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse> {
        const response = await this.appEventVideoClipsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    PreviewFrameTimeCode: 'previewFrameTimeCode',
    VideoUrl: 'videoUrl',
    PreviewFrameImage: 'previewFrameImage',
    PreviewImage: 'previewImage',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    VideoDeliveryState: 'videoDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum = typeof AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum[keyof typeof AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum];
/**
 * @export
 */
export const AppEventVideoClipsGetInstanceIncludeEnum = {
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventVideoClipsGetInstanceIncludeEnum = typeof AppEventVideoClipsGetInstanceIncludeEnum[keyof typeof AppEventVideoClipsGetInstanceIncludeEnum];
