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
  AppCustomProductPageCreateRequest,
  AppCustomProductPageResponse,
  AppCustomProductPageUpdateRequest,
  AppCustomProductPageVersionsResponse,
  ErrorResponse,
} from '../models';
import {
    AppCustomProductPageCreateRequestFromJSON,
    AppCustomProductPageCreateRequestToJSON,
    AppCustomProductPageResponseFromJSON,
    AppCustomProductPageResponseToJSON,
    AppCustomProductPageUpdateRequestFromJSON,
    AppCustomProductPageUpdateRequestToJSON,
    AppCustomProductPageVersionsResponseFromJSON,
    AppCustomProductPageVersionsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRequest {
    id: string;
    filterState?: Array<AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFilterStateEnum>;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum>;
    fieldsAppCustomProductPages?: Array<AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPagesEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    limit?: number;
    include?: Array<AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedIncludeEnum>;
    limitAppCustomProductPageLocalizations?: number;
}

export interface AppCustomProductPagesCreateInstanceRequest {
    appCustomProductPageCreateRequest: AppCustomProductPageCreateRequest;
}

export interface AppCustomProductPagesDeleteInstanceRequest {
    id: string;
}

export interface AppCustomProductPagesGetInstanceRequest {
    id: string;
    fieldsAppCustomProductPages?: Array<AppCustomProductPagesGetInstanceFieldsAppCustomProductPagesEnum>;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPagesGetInstanceFieldsAppCustomProductPageVersionsEnum>;
    include?: Array<AppCustomProductPagesGetInstanceIncludeEnum>;
    limitAppCustomProductPageVersions?: number;
}

export interface AppCustomProductPagesUpdateInstanceRequest {
    id: string;
    appCustomProductPageUpdateRequest: AppCustomProductPageUpdateRequest;
}

/**
 * 
 */
export class AppCustomProductPagesApi extends runtime.BaseAPI {

    /**
     */
    async appCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRaw(requestParameters: AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterState) {
            queryParameters['filter[state]'] = requestParameters.filterState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageVersions) {
            queryParameters['fields[appCustomProductPageVersions]'] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPages) {
            queryParameters['fields[appCustomProductPages]'] = requestParameters.fieldsAppCustomProductPages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageLocalizations) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppCustomProductPageLocalizations !== undefined) {
            queryParameters['limit[appCustomProductPageLocalizations]'] = requestParameters.limitAppCustomProductPageLocalizations;
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
            path: `/v1/appCustomProductPages/{id}/appCustomProductPageVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated(requestParameters: AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionsResponse> {
        const response = await this.appCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPagesCreateInstanceRaw(requestParameters: AppCustomProductPagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageResponse>> {
        if (requestParameters.appCustomProductPageCreateRequest === null || requestParameters.appCustomProductPageCreateRequest === undefined) {
            throw new runtime.RequiredError('appCustomProductPageCreateRequest','Required parameter requestParameters.appCustomProductPageCreateRequest was null or undefined when calling appCustomProductPagesCreateInstance.');
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
            path: `/v1/appCustomProductPages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppCustomProductPageCreateRequestToJSON(requestParameters.appCustomProductPageCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPagesCreateInstance(requestParameters: AppCustomProductPagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageResponse> {
        const response = await this.appCustomProductPagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPagesDeleteInstanceRaw(requestParameters: AppCustomProductPagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPagesDeleteInstance.');
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
            path: `/v1/appCustomProductPages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appCustomProductPagesDeleteInstance(requestParameters: AppCustomProductPagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appCustomProductPagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appCustomProductPagesGetInstanceRaw(requestParameters: AppCustomProductPagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPagesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppCustomProductPages) {
            queryParameters['fields[appCustomProductPages]'] = requestParameters.fieldsAppCustomProductPages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageVersions) {
            queryParameters['fields[appCustomProductPageVersions]'] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppCustomProductPageVersions !== undefined) {
            queryParameters['limit[appCustomProductPageVersions]'] = requestParameters.limitAppCustomProductPageVersions;
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
            path: `/v1/appCustomProductPages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPagesGetInstance(requestParameters: AppCustomProductPagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageResponse> {
        const response = await this.appCustomProductPagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPagesUpdateInstanceRaw(requestParameters: AppCustomProductPagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPagesUpdateInstance.');
        }

        if (requestParameters.appCustomProductPageUpdateRequest === null || requestParameters.appCustomProductPageUpdateRequest === undefined) {
            throw new runtime.RequiredError('appCustomProductPageUpdateRequest','Required parameter requestParameters.appCustomProductPageUpdateRequest was null or undefined when calling appCustomProductPagesUpdateInstance.');
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
            path: `/v1/appCustomProductPages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppCustomProductPageUpdateRequestToJSON(requestParameters.appCustomProductPageUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPagesUpdateInstance(requestParameters: AppCustomProductPagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageResponse> {
        const response = await this.appCustomProductPagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFilterStateEnum = {
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    ReadyForReview: 'READY_FOR_REVIEW',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    Accepted: 'ACCEPTED',
    Approved: 'APPROVED',
    ReplacedWithNewVersion: 'REPLACED_WITH_NEW_VERSION',
    Rejected: 'REJECTED'
} as const;
export type AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFilterStateEnum = typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFilterStateEnum[keyof typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFilterStateEnum];
/**
 * @export
 */
export const AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = {
    Version: 'version',
    State: 'state',
    DeepLink: 'deepLink',
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum[keyof typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export const AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPagesEnum = {
    Name: 'name',
    Url: 'url',
    Visible: 'visible',
    App: 'app',
    AppCustomProductPageVersions: 'appCustomProductPageVersions'
} as const;
export type AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPagesEnum = typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPagesEnum[keyof typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPagesEnum];
/**
 * @export
 */
export const AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedIncludeEnum = {
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedIncludeEnum = typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedIncludeEnum[keyof typeof AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppCustomProductPagesGetInstanceFieldsAppCustomProductPagesEnum = {
    Name: 'name',
    Url: 'url',
    Visible: 'visible',
    App: 'app',
    AppCustomProductPageVersions: 'appCustomProductPageVersions'
} as const;
export type AppCustomProductPagesGetInstanceFieldsAppCustomProductPagesEnum = typeof AppCustomProductPagesGetInstanceFieldsAppCustomProductPagesEnum[keyof typeof AppCustomProductPagesGetInstanceFieldsAppCustomProductPagesEnum];
/**
 * @export
 */
export const AppCustomProductPagesGetInstanceFieldsAppCustomProductPageVersionsEnum = {
    Version: 'version',
    State: 'state',
    DeepLink: 'deepLink',
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPagesGetInstanceFieldsAppCustomProductPageVersionsEnum = typeof AppCustomProductPagesGetInstanceFieldsAppCustomProductPageVersionsEnum[keyof typeof AppCustomProductPagesGetInstanceFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export const AppCustomProductPagesGetInstanceIncludeEnum = {
    App: 'app',
    AppCustomProductPageVersions: 'appCustomProductPageVersions'
} as const;
export type AppCustomProductPagesGetInstanceIncludeEnum = typeof AppCustomProductPagesGetInstanceIncludeEnum[keyof typeof AppCustomProductPagesGetInstanceIncludeEnum];
