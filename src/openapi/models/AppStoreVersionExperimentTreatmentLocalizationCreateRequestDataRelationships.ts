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
import type { AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment } from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';
import {
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON,
} from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships
 */
export interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships
     */
    appStoreVersionExperimentTreatment: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersionExperimentTreatment" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON(json['appStoreVersionExperimentTreatment']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsToJSON(value?: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON(value.appStoreVersionExperimentTreatment),
    };
}

