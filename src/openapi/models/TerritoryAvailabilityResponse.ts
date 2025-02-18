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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';
import type { TerritoryAvailability } from './TerritoryAvailability';
import {
    TerritoryAvailabilityFromJSON,
    TerritoryAvailabilityFromJSONTyped,
    TerritoryAvailabilityToJSON,
} from './TerritoryAvailability';

/**
 * 
 * @export
 * @interface TerritoryAvailabilityResponse
 */
export interface TerritoryAvailabilityResponse {
    /**
     * 
     * @type {TerritoryAvailability}
     * @memberof TerritoryAvailabilityResponse
     */
    data: TerritoryAvailability;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof TerritoryAvailabilityResponse
     */
    included?: Array<Territory>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof TerritoryAvailabilityResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the TerritoryAvailabilityResponse interface.
 */
export function instanceOfTerritoryAvailabilityResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function TerritoryAvailabilityResponseFromJSON(json: any): TerritoryAvailabilityResponse {
    return TerritoryAvailabilityResponseFromJSONTyped(json, false);
}

export function TerritoryAvailabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TerritoryAvailabilityFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(TerritoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function TerritoryAvailabilityResponseToJSON(value?: TerritoryAvailabilityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TerritoryAvailabilityToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(TerritoryToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

