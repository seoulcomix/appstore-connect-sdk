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
  GameCenterLeaderboardSetImageCreateRequest,
  GameCenterLeaderboardSetImageResponse,
  GameCenterLeaderboardSetImageUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterLeaderboardSetImageCreateRequestFromJSON,
    GameCenterLeaderboardSetImageCreateRequestToJSON,
    GameCenterLeaderboardSetImageResponseFromJSON,
    GameCenterLeaderboardSetImageResponseToJSON,
    GameCenterLeaderboardSetImageUpdateRequestFromJSON,
    GameCenterLeaderboardSetImageUpdateRequestToJSON,
} from '../models';

export interface GameCenterLeaderboardSetImagesCreateInstanceRequest {
    gameCenterLeaderboardSetImageCreateRequest: GameCenterLeaderboardSetImageCreateRequest;
}

export interface GameCenterLeaderboardSetImagesDeleteInstanceRequest {
    id: string;
}

export interface GameCenterLeaderboardSetImagesGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardSetImages?: Array<GameCenterLeaderboardSetImagesGetInstanceFieldsGameCenterLeaderboardSetImagesEnum>;
    include?: Array<GameCenterLeaderboardSetImagesGetInstanceIncludeEnum>;
}

export interface GameCenterLeaderboardSetImagesUpdateInstanceRequest {
    id: string;
    gameCenterLeaderboardSetImageUpdateRequest: GameCenterLeaderboardSetImageUpdateRequest;
}

/**
 * 
 */
export class GameCenterLeaderboardSetImagesApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterLeaderboardSetImagesCreateInstanceRaw(requestParameters: GameCenterLeaderboardSetImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetImageResponse>> {
        if (requestParameters.gameCenterLeaderboardSetImageCreateRequest === null || requestParameters.gameCenterLeaderboardSetImageCreateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterLeaderboardSetImageCreateRequest','Required parameter requestParameters.gameCenterLeaderboardSetImageCreateRequest was null or undefined when calling gameCenterLeaderboardSetImagesCreateInstance.');
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
            path: `/v1/gameCenterLeaderboardSetImages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterLeaderboardSetImageCreateRequestToJSON(requestParameters.gameCenterLeaderboardSetImageCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardSetImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardSetImagesCreateInstance(requestParameters: GameCenterLeaderboardSetImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetImageResponse> {
        const response = await this.gameCenterLeaderboardSetImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardSetImagesDeleteInstanceRaw(requestParameters: GameCenterLeaderboardSetImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardSetImagesDeleteInstance.');
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
            path: `/v1/gameCenterLeaderboardSetImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterLeaderboardSetImagesDeleteInstance(requestParameters: GameCenterLeaderboardSetImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterLeaderboardSetImagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterLeaderboardSetImagesGetInstanceRaw(requestParameters: GameCenterLeaderboardSetImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardSetImagesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsGameCenterLeaderboardSetImages) {
            queryParameters['fields[gameCenterLeaderboardSetImages]'] = requestParameters.fieldsGameCenterLeaderboardSetImages.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterLeaderboardSetImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardSetImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardSetImagesGetInstance(requestParameters: GameCenterLeaderboardSetImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetImageResponse> {
        const response = await this.gameCenterLeaderboardSetImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardSetImagesUpdateInstanceRaw(requestParameters: GameCenterLeaderboardSetImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardSetImagesUpdateInstance.');
        }

        if (requestParameters.gameCenterLeaderboardSetImageUpdateRequest === null || requestParameters.gameCenterLeaderboardSetImageUpdateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterLeaderboardSetImageUpdateRequest','Required parameter requestParameters.gameCenterLeaderboardSetImageUpdateRequest was null or undefined when calling gameCenterLeaderboardSetImagesUpdateInstance.');
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
            path: `/v1/gameCenterLeaderboardSetImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterLeaderboardSetImageUpdateRequestToJSON(requestParameters.gameCenterLeaderboardSetImageUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardSetImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardSetImagesUpdateInstance(requestParameters: GameCenterLeaderboardSetImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetImageResponse> {
        const response = await this.gameCenterLeaderboardSetImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterLeaderboardSetImagesGetInstanceFieldsGameCenterLeaderboardSetImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    GameCenterLeaderboardSetLocalization: 'gameCenterLeaderboardSetLocalization'
} as const;
export type GameCenterLeaderboardSetImagesGetInstanceFieldsGameCenterLeaderboardSetImagesEnum = typeof GameCenterLeaderboardSetImagesGetInstanceFieldsGameCenterLeaderboardSetImagesEnum[keyof typeof GameCenterLeaderboardSetImagesGetInstanceFieldsGameCenterLeaderboardSetImagesEnum];
/**
 * @export
 */
export const GameCenterLeaderboardSetImagesGetInstanceIncludeEnum = {
    GameCenterLeaderboardSetLocalization: 'gameCenterLeaderboardSetLocalization'
} as const;
export type GameCenterLeaderboardSetImagesGetInstanceIncludeEnum = typeof GameCenterLeaderboardSetImagesGetInstanceIncludeEnum[keyof typeof GameCenterLeaderboardSetImagesGetInstanceIncludeEnum];
