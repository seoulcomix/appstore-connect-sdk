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

import { exists, mapValues } from '../runtime';
import type { AppAvailabilityV2CreateRequestData } from './AppAvailabilityV2CreateRequestData';
import {
    AppAvailabilityV2CreateRequestDataFromJSON,
    AppAvailabilityV2CreateRequestDataFromJSONTyped,
    AppAvailabilityV2CreateRequestDataToJSON,
} from './AppAvailabilityV2CreateRequestData';
import type { TerritoryAvailabilityInlineCreate } from './TerritoryAvailabilityInlineCreate';
import {
    TerritoryAvailabilityInlineCreateFromJSON,
    TerritoryAvailabilityInlineCreateFromJSONTyped,
    TerritoryAvailabilityInlineCreateToJSON,
} from './TerritoryAvailabilityInlineCreate';

/**
 * 
 * @export
 * @interface AppAvailabilityV2CreateRequest
 */
export interface AppAvailabilityV2CreateRequest {
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestData}
     * @memberof AppAvailabilityV2CreateRequest
     */
    data: AppAvailabilityV2CreateRequestData;
    /**
     * 
     * @type {Array<TerritoryAvailabilityInlineCreate>}
     * @memberof AppAvailabilityV2CreateRequest
     */
    included?: Array<TerritoryAvailabilityInlineCreate>;
}

/**
 * Check if a given object implements the AppAvailabilityV2CreateRequest interface.
 */
export function instanceOfAppAvailabilityV2CreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppAvailabilityV2CreateRequestFromJSON(json: any): AppAvailabilityV2CreateRequest {
    return AppAvailabilityV2CreateRequestFromJSONTyped(json, false);
}

export function AppAvailabilityV2CreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2CreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppAvailabilityV2CreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(TerritoryAvailabilityInlineCreateFromJSON)),
    };
}

export function AppAvailabilityV2CreateRequestToJSON(value?: AppAvailabilityV2CreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppAvailabilityV2CreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(TerritoryAvailabilityInlineCreateToJSON)),
    };
}

