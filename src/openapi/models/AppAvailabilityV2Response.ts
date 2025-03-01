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
import type { AppAvailabilityV2 } from './AppAvailabilityV2';
import {
    AppAvailabilityV2FromJSON,
    AppAvailabilityV2FromJSONTyped,
    AppAvailabilityV2ToJSON,
} from './AppAvailabilityV2';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { TerritoryAvailability } from './TerritoryAvailability';
import {
    TerritoryAvailabilityFromJSON,
    TerritoryAvailabilityFromJSONTyped,
    TerritoryAvailabilityToJSON,
} from './TerritoryAvailability';

/**
 * 
 * @export
 * @interface AppAvailabilityV2Response
 */
export interface AppAvailabilityV2Response {
    /**
     * 
     * @type {AppAvailabilityV2}
     * @memberof AppAvailabilityV2Response
     */
    data: AppAvailabilityV2;
    /**
     * 
     * @type {Array<TerritoryAvailability>}
     * @memberof AppAvailabilityV2Response
     */
    included?: Array<TerritoryAvailability>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppAvailabilityV2Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppAvailabilityV2Response interface.
 */
export function instanceOfAppAvailabilityV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppAvailabilityV2ResponseFromJSON(json: any): AppAvailabilityV2Response {
    return AppAvailabilityV2ResponseFromJSONTyped(json, false);
}

export function AppAvailabilityV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppAvailabilityV2FromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(TerritoryAvailabilityFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppAvailabilityV2ResponseToJSON(value?: AppAvailabilityV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppAvailabilityV2ToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(TerritoryAvailabilityToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

