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
import type { NominationUpdateRequestData } from './NominationUpdateRequestData';
import {
    NominationUpdateRequestDataFromJSON,
    NominationUpdateRequestDataFromJSONTyped,
    NominationUpdateRequestDataToJSON,
} from './NominationUpdateRequestData';

/**
 * 
 * @export
 * @interface NominationUpdateRequest
 */
export interface NominationUpdateRequest {
    /**
     * 
     * @type {NominationUpdateRequestData}
     * @memberof NominationUpdateRequest
     */
    data: NominationUpdateRequestData;
}

/**
 * Check if a given object implements the NominationUpdateRequest interface.
 */
export function instanceOfNominationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function NominationUpdateRequestFromJSON(json: any): NominationUpdateRequest {
    return NominationUpdateRequestFromJSONTyped(json, false);
}

export function NominationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NominationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': NominationUpdateRequestDataFromJSON(json['data']),
    };
}

export function NominationUpdateRequestToJSON(value?: NominationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': NominationUpdateRequestDataToJSON(value.data),
    };
}

