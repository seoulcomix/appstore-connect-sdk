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
  AppCustomProductPageLocalizationsResponse,
  AppCustomProductPageVersionCreateRequest,
  AppCustomProductPageVersionResponse,
  AppCustomProductPageVersionUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppCustomProductPageLocalizationsResponseFromJSON,
    AppCustomProductPageLocalizationsResponseToJSON,
    AppCustomProductPageVersionCreateRequestFromJSON,
    AppCustomProductPageVersionCreateRequestToJSON,
    AppCustomProductPageVersionResponseFromJSON,
    AppCustomProductPageVersionResponseToJSON,
    AppCustomProductPageVersionUpdateRequestFromJSON,
    AppCustomProductPageVersionUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest {
    id: string;
    filterLocale?: Array<string>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum>;
    fieldsAppScreenshotSets?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    limit?: number;
    include?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum>;
    limitAppScreenshotSets?: number;
    limitAppPreviewSets?: number;
}

export interface AppCustomProductPageVersionsCreateInstanceRequest {
    appCustomProductPageVersionCreateRequest: AppCustomProductPageVersionCreateRequest;
}

export interface AppCustomProductPageVersionsGetInstanceRequest {
    id: string;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum>;
    include?: Array<AppCustomProductPageVersionsGetInstanceIncludeEnum>;
    limitAppCustomProductPageLocalizations?: number;
}

export interface AppCustomProductPageVersionsUpdateInstanceRequest {
    id: string;
    appCustomProductPageVersionUpdateRequest: AppCustomProductPageVersionUpdateRequest;
}

/**
 * 
 */
export class AppCustomProductPageVersionsApi extends runtime.BaseAPI {

    /**
     */
    async appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRaw(requestParameters: AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageLocalizationsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterLocale) {
            queryParameters['filter[locale]'] = requestParameters.filterLocale.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageLocalizations) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageVersions) {
            queryParameters['fields[appCustomProductPageVersions]'] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppScreenshotSets) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppPreviewSets) {
            queryParameters['fields[appPreviewSets]'] = requestParameters.fieldsAppPreviewSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAppScreenshotSets !== undefined) {
            queryParameters['limit[appScreenshotSets]'] = requestParameters.limitAppScreenshotSets;
        }

        if (requestParameters.limitAppPreviewSets !== undefined) {
            queryParameters['limit[appPreviewSets]'] = requestParameters.limitAppPreviewSets;
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
            path: `/v1/appCustomProductPageVersions/{id}/appCustomProductPageLocalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageLocalizationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(requestParameters: AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageLocalizationsResponse> {
        const response = await this.appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPageVersionsCreateInstanceRaw(requestParameters: AppCustomProductPageVersionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>> {
        if (requestParameters.appCustomProductPageVersionCreateRequest === null || requestParameters.appCustomProductPageVersionCreateRequest === undefined) {
            throw new runtime.RequiredError('appCustomProductPageVersionCreateRequest','Required parameter requestParameters.appCustomProductPageVersionCreateRequest was null or undefined when calling appCustomProductPageVersionsCreateInstance.');
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
            path: `/v1/appCustomProductPageVersions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppCustomProductPageVersionCreateRequestToJSON(requestParameters.appCustomProductPageVersionCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageVersionResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPageVersionsCreateInstance(requestParameters: AppCustomProductPageVersionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse> {
        const response = await this.appCustomProductPageVersionsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPageVersionsGetInstanceRaw(requestParameters: AppCustomProductPageVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPageVersionsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppCustomProductPageVersions) {
            queryParameters['fields[appCustomProductPageVersions]'] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppCustomProductPageLocalizations) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appCustomProductPageVersions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageVersionResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPageVersionsGetInstance(requestParameters: AppCustomProductPageVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse> {
        const response = await this.appCustomProductPageVersionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appCustomProductPageVersionsUpdateInstanceRaw(requestParameters: AppCustomProductPageVersionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appCustomProductPageVersionsUpdateInstance.');
        }

        if (requestParameters.appCustomProductPageVersionUpdateRequest === null || requestParameters.appCustomProductPageVersionUpdateRequest === undefined) {
            throw new runtime.RequiredError('appCustomProductPageVersionUpdateRequest','Required parameter requestParameters.appCustomProductPageVersionUpdateRequest was null or undefined when calling appCustomProductPageVersionsUpdateInstance.');
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
            path: `/v1/appCustomProductPageVersions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppCustomProductPageVersionUpdateRequestToJSON(requestParameters.appCustomProductPageVersionUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppCustomProductPageVersionResponseFromJSON(jsonValue));
    }

    /**
     */
    async appCustomProductPageVersionsUpdateInstance(requestParameters: AppCustomProductPageVersionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse> {
        const response = await this.appCustomProductPageVersionsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = {
    Version: 'version',
    State: 'state',
    DeepLink: 'deepLink',
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum = {
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum = typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum = {
    Version: 'version',
    State: 'state',
    DeepLink: 'deepLink',
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum = typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum[keyof typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum = typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppCustomProductPageVersionsGetInstanceIncludeEnum = {
    AppCustomProductPage: 'appCustomProductPage',
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageVersionsGetInstanceIncludeEnum = typeof AppCustomProductPageVersionsGetInstanceIncludeEnum[keyof typeof AppCustomProductPageVersionsGetInstanceIncludeEnum];
