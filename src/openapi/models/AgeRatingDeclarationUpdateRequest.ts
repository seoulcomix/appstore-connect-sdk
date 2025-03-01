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
import type { AgeRatingDeclarationUpdateRequestData } from './AgeRatingDeclarationUpdateRequestData';
import {
    AgeRatingDeclarationUpdateRequestDataFromJSON,
    AgeRatingDeclarationUpdateRequestDataFromJSONTyped,
    AgeRatingDeclarationUpdateRequestDataToJSON,
} from './AgeRatingDeclarationUpdateRequestData';

/**
 * 
 * @export
 * @interface AgeRatingDeclarationUpdateRequest
 */
export interface AgeRatingDeclarationUpdateRequest {
    /**
     * 
     * @type {AgeRatingDeclarationUpdateRequestData}
     * @memberof AgeRatingDeclarationUpdateRequest
     */
    data: AgeRatingDeclarationUpdateRequestData;
}

/**
 * Check if a given object implements the AgeRatingDeclarationUpdateRequest interface.
 */
export function instanceOfAgeRatingDeclarationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AgeRatingDeclarationUpdateRequestFromJSON(json: any): AgeRatingDeclarationUpdateRequest {
    return AgeRatingDeclarationUpdateRequestFromJSONTyped(json, false);
}

export function AgeRatingDeclarationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AgeRatingDeclarationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AgeRatingDeclarationUpdateRequestToJSON(value?: AgeRatingDeclarationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AgeRatingDeclarationUpdateRequestDataToJSON(value.data),
    };
}

