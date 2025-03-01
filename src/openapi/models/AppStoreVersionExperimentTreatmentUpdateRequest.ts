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
import type { AppStoreVersionExperimentTreatmentUpdateRequestData } from './AppStoreVersionExperimentTreatmentUpdateRequestData';
import {
    AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSON,
    AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSONTyped,
    AppStoreVersionExperimentTreatmentUpdateRequestDataToJSON,
} from './AppStoreVersionExperimentTreatmentUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentUpdateRequest
 */
export interface AppStoreVersionExperimentTreatmentUpdateRequest {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentUpdateRequestData}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequest
     */
    data: AppStoreVersionExperimentTreatmentUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentUpdateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentUpdateRequestFromJSON(json: any): AppStoreVersionExperimentTreatmentUpdateRequest {
    return AppStoreVersionExperimentTreatmentUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentTreatmentUpdateRequestToJSON(value?: AppStoreVersionExperimentTreatmentUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionExperimentTreatmentUpdateRequestDataToJSON(value.data),
    };
}

