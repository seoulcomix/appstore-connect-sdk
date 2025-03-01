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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion } from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON,
} from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';
import type { AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment } from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';
import {
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON,
} from './AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment';

/**
 * 
 * @export
 * @interface AppStoreVersionPromotionCreateRequestDataRelationships
 */
export interface AppStoreVersionPromotionCreateRequestDataRelationships {
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion}
     * @memberof AppStoreVersionPromotionCreateRequestDataRelationships
     */
    appStoreVersion: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment}
     * @memberof AppStoreVersionPromotionCreateRequestDataRelationships
     */
    appStoreVersionExperimentTreatment: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatment;
}

/**
 * Check if a given object implements the AppStoreVersionPromotionCreateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionPromotionCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersion" in value;
    isInstance = isInstance && "appStoreVersionExperimentTreatment" in value;

    return isInstance;
}

export function AppStoreVersionPromotionCreateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionPromotionCreateRequestDataRelationships {
    return AppStoreVersionPromotionCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionPromotionCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPromotionCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON(json['appStoreVersion']),
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentFromJSON(json['appStoreVersionExperimentTreatment']),
    };
}

export function AppStoreVersionPromotionCreateRequestDataRelationshipsToJSON(value?: AppStoreVersionPromotionCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON(value.appStoreVersion),
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentToJSON(value.appStoreVersionExperimentTreatment),
    };
}

