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
import type { RoutingAppCoverageUpdateRequestData } from './RoutingAppCoverageUpdateRequestData';
import {
    RoutingAppCoverageUpdateRequestDataFromJSON,
    RoutingAppCoverageUpdateRequestDataFromJSONTyped,
    RoutingAppCoverageUpdateRequestDataToJSON,
} from './RoutingAppCoverageUpdateRequestData';

/**
 * 
 * @export
 * @interface RoutingAppCoverageUpdateRequest
 */
export interface RoutingAppCoverageUpdateRequest {
    /**
     * 
     * @type {RoutingAppCoverageUpdateRequestData}
     * @memberof RoutingAppCoverageUpdateRequest
     */
    data: RoutingAppCoverageUpdateRequestData;
}

/**
 * Check if a given object implements the RoutingAppCoverageUpdateRequest interface.
 */
export function instanceOfRoutingAppCoverageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function RoutingAppCoverageUpdateRequestFromJSON(json: any): RoutingAppCoverageUpdateRequest {
    return RoutingAppCoverageUpdateRequestFromJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageUpdateRequestDataFromJSON(json['data']),
    };
}

export function RoutingAppCoverageUpdateRequestToJSON(value?: RoutingAppCoverageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': RoutingAppCoverageUpdateRequestDataToJSON(value.data),
    };
}

