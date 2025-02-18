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
  InAppPurchasePriceScheduleCreateRequest,
  InAppPurchasePriceScheduleResponse,
  InAppPurchasePricesResponse,
  TerritoryResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InAppPurchasePriceScheduleCreateRequestFromJSON,
    InAppPurchasePriceScheduleCreateRequestToJSON,
    InAppPurchasePriceScheduleResponseFromJSON,
    InAppPurchasePriceScheduleResponseToJSON,
    InAppPurchasePricesResponseFromJSON,
    InAppPurchasePricesResponseToJSON,
    TerritoryResponseFromJSON,
    TerritoryResponseToJSON,
} from '../models';

export interface InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsInAppPurchasePrices?: Array<InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum>;
    fieldsInAppPurchasePricePoints?: Array<InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum>;
    fieldsTerritories?: Array<InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum>;
}

export interface InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRequest {
    id: string;
    fieldsTerritories?: Array<InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum>;
}

export interface InAppPurchasePriceSchedulesCreateInstanceRequest {
    inAppPurchasePriceScheduleCreateRequest: InAppPurchasePriceScheduleCreateRequest;
}

export interface InAppPurchasePriceSchedulesGetInstanceRequest {
    id: string;
    fieldsInAppPurchasePriceSchedules?: Array<InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum>;
    fieldsTerritories?: Array<InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum>;
    fieldsInAppPurchasePrices?: Array<InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum>;
    include?: Array<InAppPurchasePriceSchedulesGetInstanceIncludeEnum>;
    limitAutomaticPrices?: number;
    limitManualPrices?: number;
}

export interface InAppPurchasePriceSchedulesManualPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsInAppPurchasePrices?: Array<InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum>;
    fieldsInAppPurchasePricePoints?: Array<InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum>;
    fieldsTerritories?: Array<InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class InAppPurchasePriceSchedulesApi extends runtime.BaseAPI {

    /**
     */
    async inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters: InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchasePricesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePrices) {
            queryParameters['fields[inAppPurchasePrices]'] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePricePoints) {
            queryParameters['fields[inAppPurchasePricePoints]'] = requestParameters.fieldsInAppPurchasePricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/inAppPurchasePriceSchedules/{id}/automaticPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchasePricesResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(requestParameters: InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchasePricesResponse> {
        const response = await this.inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters: InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerritoryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/inAppPurchasePriceSchedules/{id}/baseTerritory`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerritoryResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(requestParameters: InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerritoryResponse> {
        const response = await this.inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchasePriceSchedulesCreateInstanceRaw(requestParameters: InAppPurchasePriceSchedulesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchasePriceScheduleResponse>> {
        if (requestParameters.inAppPurchasePriceScheduleCreateRequest === null || requestParameters.inAppPurchasePriceScheduleCreateRequest === undefined) {
            throw new runtime.RequiredError('inAppPurchasePriceScheduleCreateRequest','Required parameter requestParameters.inAppPurchasePriceScheduleCreateRequest was null or undefined when calling inAppPurchasePriceSchedulesCreateInstance.');
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
            path: `/v1/inAppPurchasePriceSchedules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchasePriceScheduleCreateRequestToJSON(requestParameters.inAppPurchasePriceScheduleCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchasePriceScheduleResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePriceSchedulesCreateInstance(requestParameters: InAppPurchasePriceSchedulesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchasePriceScheduleResponse> {
        const response = await this.inAppPurchasePriceSchedulesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchasePriceSchedulesGetInstanceRaw(requestParameters: InAppPurchasePriceSchedulesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchasePriceScheduleResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsInAppPurchasePriceSchedules) {
            queryParameters['fields[inAppPurchasePriceSchedules]'] = requestParameters.fieldsInAppPurchasePriceSchedules.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePrices) {
            queryParameters['fields[inAppPurchasePrices]'] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAutomaticPrices !== undefined) {
            queryParameters['limit[automaticPrices]'] = requestParameters.limitAutomaticPrices;
        }

        if (requestParameters.limitManualPrices !== undefined) {
            queryParameters['limit[manualPrices]'] = requestParameters.limitManualPrices;
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
            path: `/v1/inAppPurchasePriceSchedules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchasePriceScheduleResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePriceSchedulesGetInstance(requestParameters: InAppPurchasePriceSchedulesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchasePriceScheduleResponse> {
        const response = await this.inAppPurchasePriceSchedulesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchasePriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters: InAppPurchasePriceSchedulesManualPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchasePricesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesManualPricesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePrices) {
            queryParameters['fields[inAppPurchasePrices]'] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsInAppPurchasePricePoints) {
            queryParameters['fields[inAppPurchasePricePoints]'] = requestParameters.fieldsInAppPurchasePricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/inAppPurchasePriceSchedules/{id}/manualPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchasePricesResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchasePriceSchedulesManualPricesGetToManyRelated(requestParameters: InAppPurchasePriceSchedulesManualPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchasePricesResponse> {
        const response = await this.inAppPurchasePriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = {
    StartDate: 'startDate',
    EndDate: 'endDate',
    Manual: 'manual',
    InAppPurchasePricePoint: 'inAppPurchasePricePoint',
    Territory: 'territory'
} as const;
export type InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum[keyof typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum[keyof typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = {
    InAppPurchasePricePoint: 'inAppPurchasePricePoint',
    Territory: 'territory'
} as const;
export type InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum[keyof typeof InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = typeof InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum[keyof typeof InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum = {
    BaseTerritory: 'baseTerritory',
    ManualPrices: 'manualPrices',
    AutomaticPrices: 'automaticPrices'
} as const;
export type InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum = typeof InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum[keyof typeof InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum = typeof InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum[keyof typeof InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum = {
    StartDate: 'startDate',
    EndDate: 'endDate',
    Manual: 'manual',
    InAppPurchasePricePoint: 'inAppPurchasePricePoint',
    Territory: 'territory'
} as const;
export type InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum = typeof InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum[keyof typeof InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesGetInstanceIncludeEnum = {
    BaseTerritory: 'baseTerritory',
    ManualPrices: 'manualPrices',
    AutomaticPrices: 'automaticPrices'
} as const;
export type InAppPurchasePriceSchedulesGetInstanceIncludeEnum = typeof InAppPurchasePriceSchedulesGetInstanceIncludeEnum[keyof typeof InAppPurchasePriceSchedulesGetInstanceIncludeEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = {
    StartDate: 'startDate',
    EndDate: 'endDate',
    Manual: 'manual',
    InAppPurchasePricePoint: 'inAppPurchasePricePoint',
    Territory: 'territory'
} as const;
export type InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum[keyof typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum[keyof typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum = {
    InAppPurchasePricePoint: 'inAppPurchasePricePoint',
    Territory: 'territory'
} as const;
export type InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum = typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum[keyof typeof InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum];
