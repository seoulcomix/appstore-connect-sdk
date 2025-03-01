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
  AppClipAdvancedExperienceCreateRequest,
  AppClipAdvancedExperienceResponse,
  AppClipAdvancedExperienceUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppClipAdvancedExperienceCreateRequestFromJSON,
    AppClipAdvancedExperienceCreateRequestToJSON,
    AppClipAdvancedExperienceResponseFromJSON,
    AppClipAdvancedExperienceResponseToJSON,
    AppClipAdvancedExperienceUpdateRequestFromJSON,
    AppClipAdvancedExperienceUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppClipAdvancedExperiencesCreateInstanceRequest {
    appClipAdvancedExperienceCreateRequest: AppClipAdvancedExperienceCreateRequest;
}

export interface AppClipAdvancedExperiencesGetInstanceRequest {
    id: string;
    fieldsAppClipAdvancedExperiences?: Array<AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum>;
    include?: Array<AppClipAdvancedExperiencesGetInstanceIncludeEnum>;
    limitLocalizations?: number;
}

export interface AppClipAdvancedExperiencesUpdateInstanceRequest {
    id: string;
    appClipAdvancedExperienceUpdateRequest: AppClipAdvancedExperienceUpdateRequest;
}

/**
 * 
 */
export class AppClipAdvancedExperiencesApi extends runtime.BaseAPI {

    /**
     */
    async appClipAdvancedExperiencesCreateInstanceRaw(requestParameters: AppClipAdvancedExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>> {
        if (requestParameters.appClipAdvancedExperienceCreateRequest === null || requestParameters.appClipAdvancedExperienceCreateRequest === undefined) {
            throw new runtime.RequiredError('appClipAdvancedExperienceCreateRequest','Required parameter requestParameters.appClipAdvancedExperienceCreateRequest was null or undefined when calling appClipAdvancedExperiencesCreateInstance.');
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
            path: `/v1/appClipAdvancedExperiences`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAdvancedExperienceCreateRequestToJSON(requestParameters.appClipAdvancedExperienceCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperiencesCreateInstance(requestParameters: AppClipAdvancedExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse> {
        const response = await this.appClipAdvancedExperiencesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAdvancedExperiencesGetInstanceRaw(requestParameters: AppClipAdvancedExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipAdvancedExperiencesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipAdvancedExperiences) {
            queryParameters['fields[appClipAdvancedExperiences]'] = requestParameters.fieldsAppClipAdvancedExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitLocalizations !== undefined) {
            queryParameters['limit[localizations]'] = requestParameters.limitLocalizations;
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
            path: `/v1/appClipAdvancedExperiences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperiencesGetInstance(requestParameters: AppClipAdvancedExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse> {
        const response = await this.appClipAdvancedExperiencesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAdvancedExperiencesUpdateInstanceRaw(requestParameters: AppClipAdvancedExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipAdvancedExperiencesUpdateInstance.');
        }

        if (requestParameters.appClipAdvancedExperienceUpdateRequest === null || requestParameters.appClipAdvancedExperienceUpdateRequest === undefined) {
            throw new runtime.RequiredError('appClipAdvancedExperienceUpdateRequest','Required parameter requestParameters.appClipAdvancedExperienceUpdateRequest was null or undefined when calling appClipAdvancedExperiencesUpdateInstance.');
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
            path: `/v1/appClipAdvancedExperiences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAdvancedExperienceUpdateRequestToJSON(requestParameters.appClipAdvancedExperienceUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperiencesUpdateInstance(requestParameters: AppClipAdvancedExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse> {
        const response = await this.appClipAdvancedExperiencesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum = {
    Link: 'link',
    Version: 'version',
    Status: 'status',
    Action: 'action',
    IsPoweredBy: 'isPoweredBy',
    Place: 'place',
    PlaceStatus: 'placeStatus',
    BusinessCategory: 'businessCategory',
    DefaultLanguage: 'defaultLanguage',
    AppClip: 'appClip',
    HeaderImage: 'headerImage',
    Localizations: 'localizations'
} as const;
export type AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum = typeof AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum[keyof typeof AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum];
/**
 * @export
 */
export const AppClipAdvancedExperiencesGetInstanceIncludeEnum = {
    AppClip: 'appClip',
    HeaderImage: 'headerImage',
    Localizations: 'localizations'
} as const;
export type AppClipAdvancedExperiencesGetInstanceIncludeEnum = typeof AppClipAdvancedExperiencesGetInstanceIncludeEnum[keyof typeof AppClipAdvancedExperiencesGetInstanceIncludeEnum];
