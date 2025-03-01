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
import type { EndUserLicenseAgreementUpdateRequestData } from './EndUserLicenseAgreementUpdateRequestData';
import {
    EndUserLicenseAgreementUpdateRequestDataFromJSON,
    EndUserLicenseAgreementUpdateRequestDataFromJSONTyped,
    EndUserLicenseAgreementUpdateRequestDataToJSON,
} from './EndUserLicenseAgreementUpdateRequestData';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementUpdateRequest
 */
export interface EndUserLicenseAgreementUpdateRequest {
    /**
     * 
     * @type {EndUserLicenseAgreementUpdateRequestData}
     * @memberof EndUserLicenseAgreementUpdateRequest
     */
    data: EndUserLicenseAgreementUpdateRequestData;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementUpdateRequest interface.
 */
export function instanceOfEndUserLicenseAgreementUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function EndUserLicenseAgreementUpdateRequestFromJSON(json: any): EndUserLicenseAgreementUpdateRequest {
    return EndUserLicenseAgreementUpdateRequestFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementUpdateRequestDataFromJSON(json['data']),
    };
}

export function EndUserLicenseAgreementUpdateRequestToJSON(value?: EndUserLicenseAgreementUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': EndUserLicenseAgreementUpdateRequestDataToJSON(value.data),
    };
}

