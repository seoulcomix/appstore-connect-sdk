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
  SubscriptionPromotionalOfferCreateRequest,
  SubscriptionPromotionalOfferPricesResponse,
  SubscriptionPromotionalOfferResponse,
  SubscriptionPromotionalOfferUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionPromotionalOfferCreateRequestFromJSON,
    SubscriptionPromotionalOfferCreateRequestToJSON,
    SubscriptionPromotionalOfferPricesResponseFromJSON,
    SubscriptionPromotionalOfferPricesResponseToJSON,
    SubscriptionPromotionalOfferResponseFromJSON,
    SubscriptionPromotionalOfferResponseToJSON,
    SubscriptionPromotionalOfferUpdateRequestFromJSON,
    SubscriptionPromotionalOfferUpdateRequestToJSON,
} from '../models';

export interface SubscriptionPromotionalOffersCreateInstanceRequest {
    subscriptionPromotionalOfferCreateRequest: SubscriptionPromotionalOfferCreateRequest;
}

export interface SubscriptionPromotionalOffersDeleteInstanceRequest {
    id: string;
}

export interface SubscriptionPromotionalOffersGetInstanceRequest {
    id: string;
    fieldsSubscriptionPromotionalOffers?: Array<SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum>;
    fieldsSubscriptionPromotionalOfferPrices?: Array<SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum>;
    include?: Array<SubscriptionPromotionalOffersGetInstanceIncludeEnum>;
    limitPrices?: number;
}

export interface SubscriptionPromotionalOffersPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsSubscriptionPromotionalOfferPrices?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum>;
    fieldsTerritories?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    limit?: number;
    include?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionPromotionalOffersUpdateInstanceRequest {
    id: string;
    subscriptionPromotionalOfferUpdateRequest: SubscriptionPromotionalOfferUpdateRequest;
}

/**
 * 
 */
export class SubscriptionPromotionalOffersApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionPromotionalOffersCreateInstanceRaw(requestParameters: SubscriptionPromotionalOffersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>> {
        if (requestParameters.subscriptionPromotionalOfferCreateRequest === null || requestParameters.subscriptionPromotionalOfferCreateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionPromotionalOfferCreateRequest','Required parameter requestParameters.subscriptionPromotionalOfferCreateRequest was null or undefined when calling subscriptionPromotionalOffersCreateInstance.');
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
            path: `/v1/subscriptionPromotionalOffers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionPromotionalOfferCreateRequestToJSON(requestParameters.subscriptionPromotionalOfferCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPromotionalOfferResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPromotionalOffersCreateInstance(requestParameters: SubscriptionPromotionalOffersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse> {
        const response = await this.subscriptionPromotionalOffersCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionPromotionalOffersDeleteInstanceRaw(requestParameters: SubscriptionPromotionalOffersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionPromotionalOffersDeleteInstance.');
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
            path: `/v1/subscriptionPromotionalOffers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async subscriptionPromotionalOffersDeleteInstance(requestParameters: SubscriptionPromotionalOffersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionPromotionalOffersDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionPromotionalOffersGetInstanceRaw(requestParameters: SubscriptionPromotionalOffersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionPromotionalOffersGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionPromotionalOffers) {
            queryParameters['fields[subscriptionPromotionalOffers]'] = requestParameters.fieldsSubscriptionPromotionalOffers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPromotionalOfferPrices) {
            queryParameters['fields[subscriptionPromotionalOfferPrices]'] = requestParameters.fieldsSubscriptionPromotionalOfferPrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitPrices !== undefined) {
            queryParameters['limit[prices]'] = requestParameters.limitPrices;
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
            path: `/v1/subscriptionPromotionalOffers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPromotionalOfferResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPromotionalOffersGetInstance(requestParameters: SubscriptionPromotionalOffersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse> {
        const response = await this.subscriptionPromotionalOffersGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionPromotionalOffersPricesGetToManyRelatedRaw(requestParameters: SubscriptionPromotionalOffersPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferPricesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionPromotionalOffersPricesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPromotionalOfferPrices) {
            queryParameters['fields[subscriptionPromotionalOfferPrices]'] = requestParameters.fieldsSubscriptionPromotionalOfferPrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPricePoints) {
            queryParameters['fields[subscriptionPricePoints]'] = requestParameters.fieldsSubscriptionPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionPromotionalOffers/{id}/prices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPromotionalOfferPricesResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPromotionalOffersPricesGetToManyRelated(requestParameters: SubscriptionPromotionalOffersPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferPricesResponse> {
        const response = await this.subscriptionPromotionalOffersPricesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionPromotionalOffersUpdateInstanceRaw(requestParameters: SubscriptionPromotionalOffersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionPromotionalOffersUpdateInstance.');
        }

        if (requestParameters.subscriptionPromotionalOfferUpdateRequest === null || requestParameters.subscriptionPromotionalOfferUpdateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionPromotionalOfferUpdateRequest','Required parameter requestParameters.subscriptionPromotionalOfferUpdateRequest was null or undefined when calling subscriptionPromotionalOffersUpdateInstance.');
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
            path: `/v1/subscriptionPromotionalOffers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionPromotionalOfferUpdateRequestToJSON(requestParameters.subscriptionPromotionalOfferUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPromotionalOfferResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPromotionalOffersUpdateInstance(requestParameters: SubscriptionPromotionalOffersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse> {
        const response = await this.subscriptionPromotionalOffersUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum = {
    Name: 'name',
    OfferCode: 'offerCode',
    Duration: 'duration',
    OfferMode: 'offerMode',
    NumberOfPeriods: 'numberOfPeriods',
    Subscription: 'subscription',
    Prices: 'prices'
} as const;
export type SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum = typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum[keyof typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum = {
    Territory: 'territory',
    SubscriptionPricePoint: 'subscriptionPricePoint'
} as const;
export type SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum = typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum[keyof typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersGetInstanceIncludeEnum = {
    Subscription: 'subscription',
    Prices: 'prices'
} as const;
export type SubscriptionPromotionalOffersGetInstanceIncludeEnum = typeof SubscriptionPromotionalOffersGetInstanceIncludeEnum[keyof typeof SubscriptionPromotionalOffersGetInstanceIncludeEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum = {
    Territory: 'territory',
    SubscriptionPricePoint: 'subscriptionPricePoint'
} as const;
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum = typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum = typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    ProceedsYear2: 'proceedsYear2',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export const SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum = {
    Territory: 'territory',
    SubscriptionPricePoint: 'subscriptionPricePoint'
} as const;
export type SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum = typeof SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum];
