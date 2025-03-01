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
  GameCenterLeaderboardReleaseCreateRequest,
  GameCenterLeaderboardReleaseResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterLeaderboardReleaseCreateRequestFromJSON,
    GameCenterLeaderboardReleaseCreateRequestToJSON,
    GameCenterLeaderboardReleaseResponseFromJSON,
    GameCenterLeaderboardReleaseResponseToJSON,
} from '../models';

export interface GameCenterLeaderboardReleasesCreateInstanceRequest {
    gameCenterLeaderboardReleaseCreateRequest: GameCenterLeaderboardReleaseCreateRequest;
}

export interface GameCenterLeaderboardReleasesDeleteInstanceRequest {
    id: string;
}

export interface GameCenterLeaderboardReleasesGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardReleases?: Array<GameCenterLeaderboardReleasesGetInstanceFieldsGameCenterLeaderboardReleasesEnum>;
    include?: Array<GameCenterLeaderboardReleasesGetInstanceIncludeEnum>;
}

/**
 * 
 */
export class GameCenterLeaderboardReleasesApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterLeaderboardReleasesCreateInstanceRaw(requestParameters: GameCenterLeaderboardReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardReleaseResponse>> {
        if (requestParameters.gameCenterLeaderboardReleaseCreateRequest === null || requestParameters.gameCenterLeaderboardReleaseCreateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterLeaderboardReleaseCreateRequest','Required parameter requestParameters.gameCenterLeaderboardReleaseCreateRequest was null or undefined when calling gameCenterLeaderboardReleasesCreateInstance.');
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
            path: `/v1/gameCenterLeaderboardReleases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterLeaderboardReleaseCreateRequestToJSON(requestParameters.gameCenterLeaderboardReleaseCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardReleaseResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardReleasesCreateInstance(requestParameters: GameCenterLeaderboardReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardReleaseResponse> {
        const response = await this.gameCenterLeaderboardReleasesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardReleasesDeleteInstanceRaw(requestParameters: GameCenterLeaderboardReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardReleasesDeleteInstance.');
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
            path: `/v1/gameCenterLeaderboardReleases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterLeaderboardReleasesDeleteInstance(requestParameters: GameCenterLeaderboardReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterLeaderboardReleasesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterLeaderboardReleasesGetInstanceRaw(requestParameters: GameCenterLeaderboardReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardReleaseResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardReleasesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsGameCenterLeaderboardReleases) {
            queryParameters['fields[gameCenterLeaderboardReleases]'] = requestParameters.fieldsGameCenterLeaderboardReleases.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterLeaderboardReleases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardReleaseResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardReleasesGetInstance(requestParameters: GameCenterLeaderboardReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardReleaseResponse> {
        const response = await this.gameCenterLeaderboardReleasesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterLeaderboardReleasesGetInstanceFieldsGameCenterLeaderboardReleasesEnum = {
    Live: 'live',
    GameCenterDetail: 'gameCenterDetail',
    GameCenterLeaderboard: 'gameCenterLeaderboard'
} as const;
export type GameCenterLeaderboardReleasesGetInstanceFieldsGameCenterLeaderboardReleasesEnum = typeof GameCenterLeaderboardReleasesGetInstanceFieldsGameCenterLeaderboardReleasesEnum[keyof typeof GameCenterLeaderboardReleasesGetInstanceFieldsGameCenterLeaderboardReleasesEnum];
/**
 * @export
 */
export const GameCenterLeaderboardReleasesGetInstanceIncludeEnum = {
    GameCenterDetail: 'gameCenterDetail',
    GameCenterLeaderboard: 'gameCenterLeaderboard'
} as const;
export type GameCenterLeaderboardReleasesGetInstanceIncludeEnum = typeof GameCenterLeaderboardReleasesGetInstanceIncludeEnum[keyof typeof GameCenterLeaderboardReleasesGetInstanceIncludeEnum];
